# Blog API - Quick Reference Guide

## 🚀 Quick Start

### Base URL
```
http://localhost:8000/api/blog/
```

---

## 📋 Endpoints Overview

### Categories

#### List all categories
```http
GET /api/blog/categories/
```

**Response:**
```json
{
  "count": 10,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": "uuid",
      "name": "Technology",
      "slug": "technology",
      "description": "Tech related posts",
      "og_image": "/media/blogs/categories/og_images/tech.jpg",
      "post_count": 25,
      "display_order": 1,
      "url": "/blog/category/technology/"
    }
  ]
}
```

#### Get category details
```http
GET /api/blog/categories/{slug}/
```

**Response includes subcategories:**
```json
{
  "id": "uuid",
  "name": "Technology",
  "slug": "technology",
  "description": "Tech posts",
  "meta_title": "Technology Blog",
  "meta_description": "Read our latest tech articles",
  "og_image": "/media/...",
  "post_count": 25,
  "subcategories": [
    {
      "id": "uuid",
      "name": "AI & Machine Learning",
      "slug": "technology-ai-machine-learning",
      "post_count": 12
    }
  ],
  "url": "/blog/category/technology/",
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-15T12:00:00Z"
}
```

#### Get posts in category
```http
GET /api/blog/categories/{slug}/posts/?page=1&page_size=12
```

---

### SubCategories

#### List all subcategories
```http
GET /api/blog/subcategories/
```

#### Get subcategory details
```http
GET /api/blog/subcategories/{slug}/
```

#### Get posts in subcategory
```http
GET /api/blog/subcategories/{slug}/posts/
```

---

### Blog Posts

#### List all published posts
```http
GET /api/blog/posts/
```

**Response:**
```json
{
  "count": 100,
  "next": "http://localhost:8000/api/blog/posts/?page=2",
  "previous": null,
  "results": [
    {
      "id": "uuid",
      "title": "Getting Started with Django",
      "slug": "getting-started-with-django",
      "excerpt": "Learn the basics of Django framework...",
      "featured_image": "/media/blogs/featured/django.jpg",
      "display_image": "/media/blogs/featured/django.jpg",
      "featured_image_alt": "Django logo",
      "category_name": "Technology",
      "category_slug": "technology",
      "subcategory_name": "Web Development",
      "subcategory_slug": "technology-web-development",
      "author_name": "John Doe",
      "author_image": "/media/blogs/authors/john.jpg",
      "publish_date": "2024-01-15T10:00:00Z",
      "reading_time": 5,
      "views_count": 1250,
      "is_featured": true,
      "is_published": true,
      "url": "/blog/post/getting-started-with-django/",
      "created_at": "2024-01-10T08:00:00Z"
    }
  ]
}
```

#### Get single post
```http
GET /api/blog/posts/{slug}/
```

**Full response with SEO data:**
```json
{
  "id": "uuid",
  "title": "Getting Started with Django",
  "slug": "getting-started-with-django",
  "excerpt": "Brief summary...",
  "content": "<p>Full HTML content...</p>",
  "featured_image": "/media/...",
  "featured_image_alt": "Alt text",
  "display_image": "/media/...",
  "category": {
    "id": "uuid",
    "name": "Technology",
    "slug": "technology"
  },
  "subcategory": {
    "id": "uuid",
    "name": "Web Development",
    "slug": "technology-web-development"
  },
  "author_name": "John Doe",
  "author_image": "/media/...",
  "author_bio": "Senior developer...",
  "meta_title": "Django Tutorial - Getting Started",
  "meta_description": "Complete guide to Django...",
  "meta_keywords": "django, python, web development",
  "canonical_url": "https://example.com/blog/getting-started-with-django/",
  "og_image": "/media/...",
  "og_title": "Getting Started with Django",
  "og_description": "Learn Django from scratch",
  "status": "published",
  "publish_date": "2024-01-15T10:00:00Z",
  "views_count": 1251,
  "reading_time": 5,
  "allow_indexing": true,
  "is_featured": true,
  "is_published": true,
  "url": "/blog/post/getting-started-with-django/",
  "seo_meta": {
    "title": "Django Tutorial - Getting Started",
    "description": "Complete guide to Django...",
    "keywords": "django, python, web development",
    "canonical_url": "https://example.com/blog/...",
    "og_title": "Getting Started with Django",
    "og_description": "Learn Django from scratch",
    "og_image": "/media/...",
    "allow_indexing": true,
    "author": "John Doe",
    "published_time": "2024-01-15T10:00:00Z",
    "modified_time": "2024-01-16T14:30:00Z"
  },
  "created_at": "2024-01-10T08:00:00Z",
  "updated_at": "2024-01-16T14:30:00Z"
}
```

---

## 🔍 Filtering & Search

### Search posts
```http
GET /api/blog/posts/?search=django
```
Searches in: title, excerpt, content, meta_keywords, author_name

### Filter by category
```http
GET /api/blog/posts/?category=technology
```

### Filter by subcategory
```http
GET /api/blog/posts/?subcategory=technology-web-development
```

### Filter featured posts
```http
GET /api/blog/posts/?is_featured=true
```

### Filter by date range
```http
GET /api/blog/posts/?date_from=2024-01-01&date_to=2024-12-31
```

### Combine filters
```http
GET /api/blog/posts/?category=technology&is_featured=true&search=django
```

---

## 📊 Sorting

### Sort by publish date (newest first)
```http
GET /api/blog/posts/?ordering=-publish_date
```

### Sort by views (most viewed)
```http
GET /api/blog/posts/?ordering=-views_count
```

### Sort by title (A-Z)
```http
GET /api/blog/posts/?ordering=title
```

### Sort by creation date (oldest first)
```http
GET /api/blog/posts/?ordering=created_at
```

### Multiple sorting
```http
GET /api/blog/posts/?ordering=-is_featured,-publish_date
```

---

## 🎯 Custom Actions

### Get featured posts
```http
GET /api/blog/posts/featured/
```
Returns up to 10 featured posts

### Get recent posts
```http
GET /api/blog/posts/recent/?limit=5
```
Returns recent published posts (default: 10, max: 50)

### Get popular posts
```http
GET /api/blog/posts/popular/?limit=10
```
Returns most viewed posts

### Advanced search
```http
GET /api/blog/posts/search/?q=django+rest+framework
```
Full-text search with query parameter

### Filter by category (alternative)
```http
GET /api/blog/posts/by_category/?category=technology
```

### Get sitemap data
```http
GET /api/blog/posts/sitemap/
```
Returns minimal data for XML sitemap generation

---

## 📄 Pagination

### Default pagination
```http
GET /api/blog/posts/?page=2
```
Default: 12 items per page

### Custom page size
```http
GET /api/blog/posts/?page=1&page_size=20
```
Max: 100 items per page

### Pagination response structure
```json
{
  "count": 100,
  "next": "http://localhost:8000/api/blog/posts/?page=3",
  "previous": "http://localhost:8000/api/blog/posts/?page=1",
  "results": [...]
}
```

---

## 📝 Creating/Updating Posts (Admin)

### Create new post
```http
POST /api/blog/posts/
Content-Type: application/json
```

**Request body:**
```json
{
  "title": "My New Blog Post",
  "slug": "my-new-blog-post",  // Optional - auto-generated
  "excerpt": "Short summary",  // Optional - auto-generated from content
  "content": "<p>Full content here...</p>",
  "category": "uuid-of-category",
  "subcategory": "uuid-of-subcategory",  // Optional
  "author_name": "Jane Smith",
  "meta_title": "SEO Title",  // Optional - auto-generated
  "meta_description": "SEO description",  // Optional
  "meta_keywords": "keyword1, keyword2",
  "status": "published",  // or "draft", "scheduled", "archived"
  "publish_date": "2024-01-20T10:00:00Z",
  "is_featured": false,
  "allow_indexing": true
}
```

### Update post
```http
PUT /api/blog/posts/{slug}/
Content-Type: application/json
```

### Partial update
```http
PATCH /api/blog/posts/{slug}/
Content-Type: application/json
```

**Example - update status only:**
```json
{
  "status": "published",
  "publish_date": "2024-01-20T10:00:00Z"
}
```

### Delete post
```http
DELETE /api/blog/posts/{slug}/
```

---

## 🎨 Common Use Cases

### Homepage - Featured Posts
```javascript
fetch('/api/blog/posts/featured/')
  .then(res => res.json())
  .then(data => {
    // Display featured posts on homepage
  });
```

### Blog Listing Page
```javascript
const page = 1;
const category = 'technology';
fetch(`/api/blog/posts/?category=${category}&page=${page}&page_size=12`)
  .then(res => res.json())
  .then(data => {
    // Display posts with pagination
  });
```

### Single Blog Post Page
```javascript
const slug = 'getting-started-with-django';
fetch(`/api/blog/posts/${slug}/`)
  .then(res => res.json())
  .then(post => {
    // Render post content
    // Use post.seo_meta for <head> tags
  });
```

### Search Results
```javascript
const query = 'django rest framework';
fetch(`/api/blog/posts/search/?q=${encodeURIComponent(query)}`)
  .then(res => res.json())
  .then(results => {
    // Display search results
  });
```

### Category Page
```javascript
const categorySlug = 'technology';
fetch(`/api/blog/categories/${categorySlug}/`)
  .then(res => res.json())
  .then(category => {
    // Display category info and subcategories
  });

// Get posts in category
fetch(`/api/blog/categories/${categorySlug}/posts/?page=1`)
  .then(res => res.json())
  .then(posts => {
    // Display category posts
  });
```

---

## 🔐 Authentication (for Admin endpoints)

### Session Authentication
Use Django's built-in session authentication

### Token Authentication
```http
POST /api-auth/login/
Authorization: Token your-auth-token
```

---

## ⚠️ Error Responses

### 404 Not Found
```json
{
  "detail": "Not found."
}
```

### 400 Bad Request
```json
{
  "field_name": ["Error message"],
  "another_field": ["Another error"]
}
```

### 500 Server Error
```json
{
  "detail": "Internal server error."
}
```

---

## 📱 Response Headers

### CORS Headers
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

### Cache Headers
```
Cache-Control: max-age=300  // 5 minutes for list views
Cache-Control: max-age=900  // 15 minutes for detail views
```

---

## 🎯 Performance Tips

1. **Use pagination** - Don't fetch all posts at once
2. **Request only needed fields** - Use specific serializers
3. **Cache responses** - Implement client-side caching
4. **Optimize images** - Request appropriate image sizes
5. **Use filtering** - Reduce data transfer with specific queries
6. **Monitor rate limits** - Respect API throttling

---

## 📚 Additional Resources

- Full Documentation: `/backend/blog/README.md`
- Deployment Guide: `/backend/blog/DEPLOYMENT.md`
- Django Admin: `/admin/blog/`

---

**Happy coding! 🚀**
