"""
SEO Utilities for Blog System
Provides helper functions for sitemap generation, robots.txt, and SEO optimization.
"""
from django.utils.text import slugify
from django.utils.html import strip_tags
import re


def generate_slug(text, max_length=250):
    """
    Generate a clean, SEO-friendly slug from text.
    
    Args:
        text (str): Text to convert to slug
        max_length (int): Maximum slug length
    
    Returns:
        str: Clean slug
    """
    slug = slugify(text)
    return slug[:max_length]


def sanitize_meta_description(text, max_length=160):
    """
    Sanitize and truncate text for meta description.
    Removes HTML tags and ensures proper length.
    
    Args:
        text (str): Raw text to sanitize
        max_length (int): Maximum length (default: 160 chars)
    
    Returns:
        str: Clean meta description
    """
    if not text:
        return ""
    
    # Remove HTML tags
    clean_text = strip_tags(text)
    
    # Remove extra whitespace
    clean_text = re.sub(r'\s+', ' ', clean_text).strip()
    
    # Truncate to max length
    if len(clean_text) > max_length:
        clean_text = clean_text[:max_length - 3] + '...'
    
    return clean_text


def sanitize_meta_title(text, max_length=60):
    """
    Sanitize and truncate text for meta title.
    
    Args:
        text (str): Raw text to sanitize
        max_length (int): Maximum length (default: 60 chars)
    
    Returns:
        str: Clean meta title
    """
    if not text:
        return ""
    
    clean_text = strip_tags(text).strip()
    clean_text = re.sub(r'\s+', ' ', clean_text)
    
    if len(clean_text) > max_length:
        clean_text = clean_text[:max_length - 3] + '...'
    
    return clean_text


def extract_keywords(text, max_keywords=10):
    """
    Extract potential keywords from text.
    Simple implementation - can be enhanced with NLP libraries.
    
    Args:
        text (str): Text to extract keywords from
        max_keywords (int): Maximum number of keywords
    
    Returns:
        str: Comma-separated keywords
    """
    if not text:
        return ""
    
    # Remove HTML tags
    clean_text = strip_tags(text).lower()
    
    # Remove punctuation and split into words
    words = re.findall(r'\b[a-z]{4,}\b', clean_text)
    
    # Common stop words to exclude
    stop_words = {
        'this', 'that', 'with', 'from', 'have', 'will', 'what',
        'when', 'where', 'which', 'there', 'their', 'about',
        'could', 'would', 'should', 'these', 'those', 'been'
    }
    
    # Filter stop words and get unique words
    keywords = []
    seen = set()
    for word in words:
        if word not in stop_words and word not in seen and len(word) > 3:
            keywords.append(word)
            seen.add(word)
            if len(keywords) >= max_keywords:
                break
    
    return ', '.join(keywords)


def calculate_reading_time(content, words_per_minute=200):
    """
    Calculate estimated reading time for content.
    
    Args:
        content (str): HTML or text content
        words_per_minute (int): Average reading speed (default: 200)
    
    Returns:
        int: Estimated reading time in minutes
    """
    if not content:
        return 1
    
    # Remove HTML tags
    clean_text = strip_tags(content)
    
    # Count words
    word_count = len(clean_text.split())
    
    # Calculate reading time (minimum 1 minute)
    reading_time = max(1, word_count // words_per_minute)
    
    return reading_time


def generate_excerpt(content, max_length=300):
    """
    Generate excerpt from content.
    
    Args:
        content (str): HTML or text content
        max_length (int): Maximum excerpt length
    
    Returns:
        str: Clean excerpt
    """
    if not content:
        return ""
    
    # Remove HTML tags
    clean_text = strip_tags(content)
    
    # Clean whitespace
    clean_text = re.sub(r'\s+', ' ', clean_text).strip()
    
    # Truncate
    if len(clean_text) > max_length:
        # Try to cut at sentence boundary
        excerpt = clean_text[:max_length]
        last_period = excerpt.rfind('.')
        if last_period > max_length * 0.7:  # If period is in last 30%
            excerpt = excerpt[:last_period + 1]
        else:
            excerpt = excerpt[:max_length - 3] + '...'
    else:
        excerpt = clean_text
    
    return excerpt


def validate_slug_uniqueness(slug, model_class, instance_id=None):
    """
    Check if slug is unique for the given model.
    
    Args:
        slug (str): Slug to check
        model_class: Django model class
        instance_id: Current instance ID (for updates)
    
    Returns:
        bool: True if unique, False otherwise
    """
    queryset = model_class.objects.filter(slug=slug)
    
    if instance_id:
        queryset = queryset.exclude(id=instance_id)
    
    return not queryset.exists()


def generate_unique_slug(base_slug, model_class, instance_id=None):
    """
    Generate a unique slug by appending numbers if necessary.
    
    Args:
        base_slug (str): Base slug to start with
        model_class: Django model class
        instance_id: Current instance ID (for updates)
    
    Returns:
        str: Unique slug
    """
    slug = base_slug
    counter = 1
    
    while not validate_slug_uniqueness(slug, model_class, instance_id):
        slug = f"{base_slug}-{counter}"
        counter += 1
    
    return slug


def generate_canonical_url(request, path):
    """
    Generate canonical URL from request and path.
    
    Args:
        request: Django request object
        path (str): URL path
    
    Returns:
        str: Full canonical URL
    """
    scheme = request.scheme
    host = request.get_host()
    return f"{scheme}://{host}{path}"


def get_seo_metadata(obj):
    """
    Extract complete SEO metadata from a model instance.
    Works with BlogPost, BlogCategory, or BlogSubCategory.
    
    Args:
        obj: Model instance
    
    Returns:
        dict: SEO metadata
    """
    metadata = {
        'title': getattr(obj, 'meta_title', None) or getattr(obj, 'title', None) or getattr(obj, 'name', ''),
        'description': getattr(obj, 'meta_description', None) or getattr(obj, 'excerpt', None) or '',
        'keywords': getattr(obj, 'meta_keywords', None) or '',
        'canonical_url': getattr(obj, 'canonical_url', None) or obj.get_absolute_url(),
        'og_title': getattr(obj, 'og_title', None),
        'og_description': getattr(obj, 'og_description', None),
        'og_image': None,
        'allow_indexing': getattr(obj, 'allow_indexing', True),
    }
    
    # Handle image fields
    og_image = getattr(obj, 'og_image', None)
    if og_image and hasattr(og_image, 'url'):
        metadata['og_image'] = og_image.url
    elif hasattr(obj, 'featured_image'):
        featured = getattr(obj, 'featured_image', None)
        if featured and hasattr(featured, 'url'):
            metadata['og_image'] = featured.url
    
    return metadata


class SEOManager:
    """
    Manager class for SEO operations.
    Provides centralized SEO functionality.
    """
    
    @staticmethod
    def optimize_blog_post(post):
        """
        Auto-optimize a blog post's SEO fields.
        
        Args:
            post: BlogPost instance
        
        Returns:
            BlogPost: Updated instance (not saved)
        """
        # Generate slug if missing
        if not post.slug and post.title:
            post.slug = generate_unique_slug(
                slugify(post.title),
                post.__class__,
                post.id
            )
        
        # Generate meta title if missing
        if not post.meta_title and post.title:
            post.meta_title = sanitize_meta_title(post.title)
        
        # Generate meta description if missing
        if not post.meta_description:
            if post.excerpt:
                post.meta_description = sanitize_meta_description(post.excerpt)
            elif post.content:
                post.meta_description = sanitize_meta_description(post.content)
        
        # Generate excerpt if missing
        if not post.excerpt and post.content:
            post.excerpt = generate_excerpt(post.content)
        
        # Calculate reading time
        if post.content:
            post.reading_time = calculate_reading_time(post.content)
        
        # Set featured image alt if missing
        if post.featured_image and not post.featured_image_alt:
            post.featured_image_alt = f"Featured image for {post.title}"
        
        return post
    
    @staticmethod
    def optimize_category(category):
        """
        Auto-optimize a category's SEO fields.
        
        Args:
            category: BlogCategory instance
        
        Returns:
            BlogCategory: Updated instance (not saved)
        """
        if not category.slug and category.name:
            category.slug = generate_unique_slug(
                slugify(category.name),
                category.__class__,
                category.id
            )
        
        if not category.meta_title and category.name:
            category.meta_title = sanitize_meta_title(category.name)
        
        if not category.meta_description and category.description:
            category.meta_description = sanitize_meta_description(category.description)
        
        return category
