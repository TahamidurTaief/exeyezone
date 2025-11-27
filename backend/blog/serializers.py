from rest_framework import serializers
from .models import BlogCategory, BlogSubCategory, BlogPost
from django.utils import timezone
from django.conf import settings
from django.conf import settings


class BlogCategoryListSerializer(serializers.ModelSerializer):
    """
    Lightweight serializer for category lists.
    Optimized for performance with minimal fields.
    """
    post_count = serializers.IntegerField(read_only=True)
    url = serializers.SerializerMethodField()
    
    class Meta:
        model = BlogCategory
        fields = [
            'id',
            'name',
            'slug',
            'description',
            'og_image',
            'post_count',
            'display_order',
            'url',
        ]
    
    def get_url(self, obj):
        """Return the absolute URL for the category"""
        return obj.get_absolute_url()


class BlogCategoryDetailSerializer(serializers.ModelSerializer):
    """
    Detailed serializer for single category view.
    Includes SEO metadata and subcategories.
    """
    post_count = serializers.IntegerField(read_only=True)
    subcategories = serializers.SerializerMethodField()
    url = serializers.SerializerMethodField()
    
    class Meta:
        model = BlogCategory
        fields = [
            'id',
            'name',
            'slug',
            'description',
            'meta_title',
            'meta_description',
            'og_image',
            'display_order',
            'is_active',
            'post_count',
            'subcategories',
            'url',
            'created_at',
            'updated_at',
        ]
    
    def get_subcategories(self, obj):
        """Return active subcategories with post counts"""
        subcategories = obj.subcategories.filter(is_active=True).order_by('display_order', 'name')
        return BlogSubCategoryListSerializer(subcategories, many=True).data
    
    def get_url(self, obj):
        return obj.get_absolute_url()


class BlogSubCategoryListSerializer(serializers.ModelSerializer):
    """
    Lightweight serializer for subcategory lists.
    """
    category_name = serializers.CharField(source='category.name', read_only=True)
    category_slug = serializers.CharField(source='category.slug', read_only=True)
    post_count = serializers.IntegerField(read_only=True)
    url = serializers.SerializerMethodField()
    
    class Meta:
        model = BlogSubCategory
        fields = [
            'id',
            'name',
            'slug',
            'description',
            'category_name',
            'category_slug',
            'og_image',
            'post_count',
            'url',
        ]
    
    def get_url(self, obj):
        return obj.get_absolute_url()


class BlogSubCategoryDetailSerializer(serializers.ModelSerializer):
    """
    Detailed serializer for single subcategory view.
    """
    category = BlogCategoryListSerializer(read_only=True)
    post_count = serializers.IntegerField(read_only=True)
    url = serializers.SerializerMethodField()
    
    class Meta:
        model = BlogSubCategory
        fields = [
            'id',
            'name',
            'slug',
            'description',
            'meta_title',
            'meta_description',
            'og_image',
            'category',
            'display_order',
            'is_active',
            'post_count',
            'url',
            'created_at',
            'updated_at',
        ]
    
    def get_url(self, obj):
        return obj.get_absolute_url()


class BlogPostListSerializer(serializers.ModelSerializer):
    """
    Optimized serializer for blog post lists.
    Includes minimal fields for fast loading in listings/grids.
    """
    category_name = serializers.CharField(source='get_category_name', read_only=True)
    category_slug = serializers.CharField(source='category.slug', read_only=True)
    subcategory_name = serializers.CharField(source='get_subcategory_name', read_only=True)
    subcategory_slug = serializers.CharField(source='subcategory.slug', read_only=True)
    url = serializers.SerializerMethodField()
    is_published = serializers.BooleanField(read_only=True)
    display_image = serializers.SerializerMethodField()
    
    class Meta:
        model = BlogPost
        fields = [
            'id',
            'title',
            'slug',
            'excerpt',
            'featured_image',
            'display_image',
            'featured_image_alt',
            'category_name',
            'category_slug',
            'subcategory_name',
            'subcategory_slug',
            'author_name',
            'author_image',
            'publish_date',
            'reading_time',
            'views_count',
            'is_featured',
            'is_published',
            'url',
            'created_at',
        ]
    
    def get_url(self, obj):
        return obj.get_absolute_url()
    
    def get_display_image(self, obj):
        """Return image URL or default no_image.jpg"""
        request = self.context.get('request')
        if obj.display_image:
            if request:
                return request.build_absolute_uri(obj.display_image.url)
            return obj.display_image.url
        # Return default no_image.jpg
        if request:
            return request.build_absolute_uri(settings.STATIC_URL + 'img/no_image.jpg')
        return settings.STATIC_URL + 'img/no_image.jpg'


class BlogPostDetailSerializer(serializers.ModelSerializer):
    """
    Complete serializer for single blog post view.
    Includes all content, SEO metadata, and related information.
    """
    category = BlogCategoryListSerializer(read_only=True)
    subcategory = BlogSubCategoryListSerializer(read_only=True)
    url = serializers.SerializerMethodField()
    is_published = serializers.BooleanField(read_only=True)
    display_image = serializers.SerializerMethodField()
    
    # SEO meta data
    seo_meta = serializers.SerializerMethodField()
    
    class Meta:
        model = BlogPost
        fields = [
            'id',
            'title',
            'slug',
            'excerpt',
            'content',
            'featured_image',
            'featured_image_alt',
            'display_image',
            'category',
            'subcategory',
            'author_name',
            'author_image',
            'author_bio',
            'meta_title',
            'meta_description',
            'meta_keywords',
            'canonical_url',
            'og_image',
            'og_title',
            'og_description',
            'status',
            'publish_date',
            'views_count',
            'reading_time',
            'allow_indexing',
            'is_featured',
            'is_published',
            'url',
            'seo_meta',
            'created_at',
            'updated_at',
        ]
    
    def get_url(self, obj):
        return obj.get_absolute_url()
    
    def get_display_image(self, obj):
        """Return image URL or default no_image.jpg"""
        request = self.context.get('request')
        if obj.display_image:
            if request:
                return request.build_absolute_uri(obj.display_image.url)
            return obj.display_image.url
        # Return default no_image.jpg
        if request:
            return request.build_absolute_uri(settings.STATIC_URL + 'img/no_image.jpg')
        return settings.STATIC_URL + 'img/no_image.jpg'
    
    def get_seo_meta(self, obj):
        """
        Return structured SEO metadata for easy frontend consumption.
        """
        request = self.context.get('request')
        # Get OG image URL with fallback to default
        og_image_url = None
        if obj.display_image:
            og_image_url = obj.display_image.url
            if request:
                og_image_url = request.build_absolute_uri(og_image_url)
        else:
            og_image_url = settings.STATIC_URL + 'img/no_image.jpg'
            if request:
                og_image_url = request.build_absolute_uri(og_image_url)
        
        return {
            'title': obj.meta_title or obj.title,
            'description': obj.meta_description or obj.excerpt,
            'keywords': obj.meta_keywords,
            'canonical_url': obj.canonical_url or obj.get_absolute_url(),
            'og_title': obj.og_title or obj.meta_title or obj.title,
            'og_description': obj.og_description or obj.meta_description or obj.excerpt,
            'og_image': og_image_url,
            'allow_indexing': obj.allow_indexing,
            'author': obj.author_name,
            'published_time': obj.publish_date,
            'modified_time': obj.updated_at,
        }


class BlogPostCreateUpdateSerializer(serializers.ModelSerializer):
    """
    Serializer for creating and updating blog posts.
    Includes validation and auto-field generation.
    """
    class Meta:
        model = BlogPost
        fields = [
            'title',
            'slug',
            'excerpt',
            'content',
            'featured_image',
            'featured_image_alt',
            'category',
            'subcategory',
            'author_name',
            'author_image',
            'author_bio',
            'meta_title',
            'meta_description',
            'meta_keywords',
            'canonical_url',
            'og_image',
            'og_title',
            'og_description',
            'status',
            'publish_date',
            'allow_indexing',
            'is_featured',
        ]
        extra_kwargs = {
            'slug': {'required': False},
            'excerpt': {'required': False},
            'meta_title': {'required': False},
            'meta_description': {'required': False},
        }
    
    def validate_slug(self, value):
        """
        Ensure slug uniqueness during creation/update.
        """
        instance = self.instance
        if instance:
            # Update: check if slug exists excluding current instance
            if BlogPost.objects.filter(slug=value).exclude(id=instance.id).exists():
                raise serializers.ValidationError("A blog post with this slug already exists.")
        else:
            # Create: check if slug exists
            if value and BlogPost.objects.filter(slug=value).exists():
                raise serializers.ValidationError("A blog post with this slug already exists.")
        
        return value
    
    def validate(self, data):
        """
        Cross-field validation.
        """
        # Ensure subcategory belongs to the selected category
        if 'subcategory' in data and data['subcategory']:
            if 'category' in data and data['category']:
                if data['subcategory'].category != data['category']:
                    raise serializers.ValidationError({
                        'subcategory': 'Subcategory must belong to the selected category.'
                    })
        
        # If status is published, ensure publish_date is set
        if data.get('status') == 'published' and not data.get('publish_date'):
            data['publish_date'] = timezone.now()
        
        return data


class BlogPostSEOSerializer(serializers.ModelSerializer):
    """
    Minimal serializer for SEO/sitemap generation.
    Only includes fields needed for XML sitemaps and metadata.
    """
    url = serializers.SerializerMethodField()
    
    class Meta:
        model = BlogPost
        fields = [
            'slug',
            'title',
            'meta_description',
            'url',
            'publish_date',
            'updated_at',
        ]
    
    def get_url(self, obj):
        return obj.get_absolute_url()
