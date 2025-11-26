# Blog Backend - Deployment & Optimization Guide

## ✅ Deployment Checklist

### Pre-Deployment

#### 1. Database Migration
```bash
python manage.py makemigrations blog
python manage.py migrate blog
```

#### 2. Static Files
```bash
python manage.py collectstatic --noinput
```

#### 3. Create Superuser
```bash
python manage.py createsuperuser
```

---

## 🔧 Production Settings

### settings.py Updates

```python
# Production Database (PostgreSQL recommended)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'blog_db',
        'USER': 'blog_user',
        'PASSWORD': 'secure_password',
        'HOST': 'localhost',
        'PORT': '5432',
        'CONN_MAX_AGE': 600,  # Connection pooling
    }
}

# Security
DEBUG = False
ALLOWED_HOSTS = ['yourdomain.com', 'www.yourdomain.com']
SECRET_KEY = 'your-production-secret-key'
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# CORS Configuration
CORS_ALLOWED_ORIGINS = [
    'https://yourdomain.com',
    'https://www.yourdomain.com',
]

# Cache Configuration (Redis)
CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': 'redis://127.0.0.1:6379/1',
        'OPTIONS': {
            'CLIENT_CLASS': 'django_redis.client.DefaultClient',
        },
        'KEY_PREFIX': 'blog',
        'TIMEOUT': 300,
    }
}

# REST Framework Settings
REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 12,
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle',
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '100/hour',
        'user': '1000/hour',
    },
}

# Media Files (AWS S3 example)
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
AWS_ACCESS_KEY_ID = 'your-access-key'
AWS_SECRET_ACCESS_KEY = 'your-secret-key'
AWS_STORAGE_BUCKET_NAME = 'your-bucket-name'
AWS_S3_REGION_NAME = 'us-east-1'
AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'
AWS_DEFAULT_ACL = 'public-read'
AWS_QUERYSTRING_AUTH = False
```

---

## ⚡ Performance Optimization

### 1. Database Optimization

#### Index Verification
```sql
-- Check existing indexes
SELECT * FROM pg_indexes WHERE tablename LIKE 'blog_%';

-- Add additional indexes if needed
CREATE INDEX idx_blog_post_views ON blog_blogpost(views_count DESC);
CREATE INDEX idx_blog_post_category_published ON blog_blogpost(category_id, status, publish_date);
```

#### Query Optimization Tips
```python
# Always use select_related for foreign keys
BlogPost.objects.select_related('category', 'subcategory')

# Use prefetch_related for reverse relationships
BlogCategory.objects.prefetch_related('blog_posts')

# Use only() to limit fields
BlogPost.objects.only('id', 'title', 'slug', 'excerpt')

# Use defer() to exclude heavy fields
BlogPost.objects.defer('content')
```

### 2. Caching Implementation

#### Cache Categories
```python
# In views.py
from django.core.cache import cache

def get_categories():
    cache_key = 'blog_categories_list'
    categories = cache.get(cache_key)
    
    if not categories:
        categories = BlogCategory.objects.filter(
            is_active=True
        ).annotate(
            post_count=Count('blog_posts', filter=Q(blog_posts__status='published'))
        ).order_by('display_order')
        
        cache.set(cache_key, categories, timeout=3600)  # 1 hour
    
    return categories
```

#### Cache Individual Posts
```python
def get_cached_post(slug):
    cache_key = f'blog_post_{slug}'
    post = cache.get(cache_key)
    
    if not post:
        post = BlogPost.objects.select_related(
            'category', 'subcategory'
        ).get(slug=slug, status='published')
        
        cache.set(cache_key, post, timeout=300)  # 5 minutes
    
    return post
```

#### Cache Invalidation
```python
# In models.py - BlogPost
from django.core.cache import cache

def save(self, *args, **kwargs):
    super().save(*args, **kwargs)
    
    # Invalidate cache
    cache.delete(f'blog_post_{self.slug}')
    cache.delete('blog_categories_list')
    cache.delete('blog_featured_posts')
    cache.delete('blog_recent_posts')
```

### 3. Image Optimization

#### Install Pillow with optimization
```bash
pip install Pillow pillow-avif-plugin
```

#### Image Processing
```python
# utils/image_optimization.py
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile

def optimize_image(image_field, max_width=1200, quality=85):
    """
    Optimize uploaded images for web.
    """
    img = Image.open(image_field)
    
    # Convert RGBA to RGB if necessary
    if img.mode in ('RGBA', 'LA', 'P'):
        background = Image.new('RGB', img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
        img = background
    
    # Resize if too large
    if img.width > max_width:
        ratio = max_width / img.width
        new_height = int(img.height * ratio)
        img = img.resize((max_width, new_height), Image.LANCZOS)
    
    # Save optimized
    output = BytesIO()
    img.save(output, format='JPEG', quality=quality, optimize=True)
    output.seek(0)
    
    return InMemoryUploadedFile(
        output, 'ImageField',
        f"{image_field.name.split('.')[0]}.jpg",
        'image/jpeg',
        output.getbuffer().nbytes,
        None
    )
```

### 4. API Response Optimization

#### Compression
```python
# settings.py
MIDDLEWARE = [
    'django.middleware.gzip.GZipMiddleware',  # Add this
    # ... other middleware
]
```

#### Pagination Optimization
```python
# Custom pagination for better performance
class CursorSetPagination(CursorPagination):
    page_size = 20
    ordering = '-created_at'
    cursor_query_param = 'cursor'
```

---

## 🔒 Security Best Practices

### 1. Rate Limiting
```python
# Install django-ratelimit
pip install django-ratelimit

# In views.py
from django_ratelimit.decorators import ratelimit

@ratelimit(key='ip', rate='5/m', method='POST')
def create_post(request):
    # Your code
```

### 2. Input Validation
```python
# Serializer validation
class BlogPostCreateUpdateSerializer(serializers.ModelSerializer):
    def validate_content(self, value):
        # Strip dangerous HTML
        from bleach import clean
        allowed_tags = ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'ul', 'ol', 'li', 'a', 'img']
        allowed_attrs = {'a': ['href', 'title'], 'img': ['src', 'alt']}
        return clean(value, tags=allowed_tags, attributes=allowed_attrs)
```

### 3. CSRF Protection
```python
# Ensure CSRF middleware is enabled
MIDDLEWARE = [
    'django.middleware.csrf.CsrfViewMiddleware',
    # ...
]

# For API, use token authentication
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    ],
}
```

---

## 📊 Monitoring & Analytics

### 1. Error Tracking (Sentry)
```python
# Install
pip install sentry-sdk

# settings.py
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

sentry_sdk.init(
    dsn="your-sentry-dsn",
    integrations=[DjangoIntegration()],
    traces_sample_rate=1.0,
    send_default_pii=True,
)
```

### 2. Performance Monitoring
```python
# Install django-debug-toolbar for development
pip install django-debug-toolbar

# Add to settings.py (development only)
if DEBUG:
    INSTALLED_APPS += ['debug_toolbar']
    MIDDLEWARE += ['debug_toolbar.middleware.DebugToolbarMiddleware']
    INTERNAL_IPS = ['127.0.0.1']
```

### 3. Query Logging
```python
# settings.py
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'file': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            'filename': 'logs/blog_queries.log',
        },
    },
    'loggers': {
        'django.db.backends': {
            'handlers': ['file'],
            'level': 'DEBUG',
        },
    },
}
```

---

## 🚀 Scaling Strategies

### 1. Database Read Replicas
```python
# settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'blog_db',
        # ... primary DB config
    },
    'replica': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'blog_db',
        # ... replica DB config
    }
}

# Database router
class BlogRouter:
    def db_for_read(self, model, **hints):
        if model._meta.app_label == 'blog':
            return 'replica'
        return None
```

### 2. CDN Integration
```python
# Use CloudFront or Cloudflare
AWS_S3_CUSTOM_DOMAIN = 'cdn.yourdomain.com'

# Static files via CDN
STATIC_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/static/'
MEDIA_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/media/'
```

### 3. Elasticsearch Integration
```python
# For advanced search
pip install elasticsearch elasticsearch-dsl

# Create search index
from elasticsearch_dsl import Document, Text, Date, Integer

class BlogPostDocument(Document):
    title = Text()
    content = Text()
    excerpt = Text()
    publish_date = Date()
    
    class Index:
        name = 'blog_posts'
```

---

## 📈 SEO Enhancements

### 1. Structured Data (JSON-LD)
```python
# Add to serializer
def get_structured_data(self, obj):
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": obj.title,
        "image": obj.display_image.url if obj.display_image else None,
        "datePublished": obj.publish_date.isoformat(),
        "dateModified": obj.updated_at.isoformat(),
        "author": {
            "@type": "Person",
            "name": obj.author_name,
        },
        "publisher": {
            "@type": "Organization",
            "name": "Your Organization",
        },
    }
```

### 2. XML Sitemap Generation
```python
# sitemap.py
from django.contrib.sitemaps import Sitemap
from .models import BlogPost
from django.utils import timezone

class BlogPostSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.8
    
    def items(self):
        return BlogPost.objects.filter(
            status='published',
            publish_date__lte=timezone.now(),
            allow_indexing=True
        )
    
    def lastmod(self, obj):
        return obj.updated_at
    
    def location(self, obj):
        return obj.get_absolute_url()
```

### 3. Robots.txt
```python
# views.py
from django.http import HttpResponse

def robots_txt(request):
    lines = [
        "User-agent: *",
        "Allow: /api/blog/posts/",
        "Disallow: /admin/",
        f"Sitemap: {request.scheme}://{request.get_host()}/sitemap.xml",
    ]
    return HttpResponse("\n".join(lines), content_type="text/plain")
```

---

## 🧪 Testing

### Unit Tests
```python
# tests/test_models.py
from django.test import TestCase
from blog.models import BlogCategory, BlogPost

class BlogPostModelTest(TestCase):
    def test_slug_generation(self):
        post = BlogPost.objects.create(title="Test Post")
        self.assertEqual(post.slug, "test-post")
    
    def test_reading_time_calculation(self):
        content = " ".join(["word"] * 400)  # 400 words
        post = BlogPost.objects.create(title="Test", content=content)
        self.assertEqual(post.reading_time, 2)  # 400/200 = 2 min
```

### API Tests
```python
# tests/test_api.py
from rest_framework.test import APITestCase
from rest_framework import status

class BlogAPITest(APITestCase):
    def test_list_posts(self):
        response = self.client.get('/api/blog/posts/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_featured_posts(self):
        response = self.client.get('/api/blog/posts/featured/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
```

---

## 📝 Maintenance Tasks

### Regular Tasks
```bash
# Database optimization (PostgreSQL)
python manage.py dbshell
VACUUM ANALYZE blog_blogpost;
REINDEX TABLE blog_blogpost;

# Clear old sessions
python manage.py clearsessions

# Check for missing migrations
python manage.py makemigrations --check --dry-run
```

### Backup Strategy
```bash
# Automated database backup
pg_dump blog_db > backup_$(date +%Y%m%d).sql

# Backup media files
aws s3 sync s3://your-bucket/ ./media-backup/
```

---

## 🎯 Performance Targets

- API Response Time: < 200ms (p95)
- Database Query Count: < 10 per request
- Time to First Byte: < 100ms
- Page Load Time: < 2s
- Cache Hit Rate: > 80%
- Database Connection Pool: 10-20 connections
- Uptime: 99.9%

---

## 📚 Dependencies

```txt
# requirements.txt (Production)
Django>=4.2.0
djangorestframework>=3.14.0
django-filter>=23.0
django-cors-headers>=4.0.0
django-ckeditor>=6.6.0
Pillow>=10.0.0
psycopg2-binary>=2.9.0  # PostgreSQL
django-redis>=5.2.0
gunicorn>=21.0.0
whitenoise>=6.5.0
boto3>=1.26.0  # AWS S3
django-storages>=1.13.0
sentry-sdk>=1.25.0
```

---

**Deployment complete! Your SEO-optimized blog backend is production-ready.**
