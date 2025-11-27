from django.db import models
from django.utils.text import slugify
from django.core.validators import MinLengthValidator, MaxLengthValidator
from django.urls import reverse
from ckeditor.fields import RichTextField
import uuid


class BlogCategory(models.Model):
    """
    Main blog categories for organizing posts.
    SEO optimized with slug, meta fields and indexing.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, unique=True, db_index=True)
    slug = models.SlugField(
        max_length=120,
        unique=True,
        db_index=True,
        help_text="URL-friendly version of the name (auto-generated)"
    )
    description = models.TextField(blank=True, null=True)
    
    # SEO Fields
    meta_title = models.CharField(
        max_length=60,
        blank=True,
        null=True,
        validators=[MaxLengthValidator(60)],
        help_text="SEO title (max 60 chars)"
    )
    meta_description = models.CharField(
        max_length=160,
        blank=True,
        null=True,
        validators=[MaxLengthValidator(160)],
        help_text="SEO meta description (max 160 chars)"
    )
    
    # Image for social sharing
    og_image = models.ImageField(
        upload_to='blogs/categories/og_images/',
        blank=True,
        null=True,
        help_text="Image for social media sharing (Open Graph)"
    )
    
    # Ordering and visibility
    display_order = models.IntegerField(default=0, help_text="Order in category list")
    is_active = models.BooleanField(default=True, db_index=True)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "Blog Category"
        verbose_name_plural = "Blog Categories"
        ordering = ['display_order', 'name']
        indexes = [
            models.Index(fields=['slug']),
            models.Index(fields=['is_active', 'display_order']),
        ]
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        """Auto-generate slug from name if not provided"""
        if not self.slug:
            self.slug = slugify(self.name)
        
        # Auto-generate meta_title from name if not provided
        if not self.meta_title:
            self.meta_title = self.name[:60]
        
        super().save(*args, **kwargs)
    
    def get_absolute_url(self):
        """Returns the canonical URL for this category"""
        return reverse('blog:category-detail', kwargs={'slug': self.slug})


class BlogSubCategory(models.Model):
    """
    Subcategories for more granular blog post organization.
    Linked to main categories for hierarchical structure.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.ForeignKey(
        BlogCategory,
        on_delete=models.CASCADE,
        related_name='subcategories',
        db_index=True
    )
    name = models.CharField(max_length=100)
    slug = models.SlugField(
        max_length=120,
        unique=True,
        db_index=True,
        help_text="URL-friendly version of the name (auto-generated)"
    )
    description = models.TextField(blank=True, null=True)
    
    # SEO Fields
    meta_title = models.CharField(
        max_length=60,
        blank=True,
        null=True,
        validators=[MaxLengthValidator(60)],
        help_text="SEO title (max 60 chars)"
    )
    meta_description = models.CharField(
        max_length=160,
        blank=True,
        null=True,
        validators=[MaxLengthValidator(160)],
        help_text="SEO meta description (max 160 chars)"
    )
    
    # Image for social sharing
    og_image = models.ImageField(
        upload_to='blogs/subcategories/og_images/',
        blank=True,
        null=True,
        help_text="Image for social media sharing"
    )
    
    # Ordering and visibility
    display_order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True, db_index=True)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "Blog SubCategory"
        verbose_name_plural = "Blog SubCategories"
        ordering = ['display_order', 'name']
        unique_together = [['category', 'name']]
        indexes = [
            models.Index(fields=['slug']),
            models.Index(fields=['category', 'is_active']),
        ]
    
    def __str__(self):
        return f"{self.category.name} > {self.name}"
    
    def save(self, *args, **kwargs):
        """Auto-generate slug from name if not provided"""
        if not self.slug:
            base_slug = slugify(self.name)
            # Ensure uniqueness by appending category slug
            self.slug = f"{slugify(self.category.name)}-{base_slug}"
        
        if not self.meta_title:
            self.meta_title = f"{self.name} - {self.category.name}"[:60]
        
        super().save(*args, **kwargs)
    
    def get_absolute_url(self):
        """Returns the canonical URL for this subcategory"""
        return reverse('blog:subcategory-detail', kwargs={'slug': self.slug})


class BlogPost(models.Model):
    """
    Main blog post model with comprehensive SEO optimization.
    Supports drafts, scheduling, rich content, and full metadata control.
    """
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
        ('scheduled', 'Scheduled'),
        ('archived', 'Archived'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    # Core Fields
    title = models.CharField(
        max_length=200,
        db_index=True,
        help_text="Blog post title (max 200 chars)"
    )
    slug = models.SlugField(
        max_length=250,
        unique=True,
        db_index=True,
        help_text="URL-friendly unique identifier (auto-generated from title)"
    )
    
    # Content
    excerpt = models.TextField(
        max_length=300,
        blank=True,
        null=True,
        help_text="Short description/summary (max 300 chars, used in listings)"
    )
    content = RichTextField(help_text="Main blog post content (supports rich text)")
    
    # Featured Image
    featured_image = models.ImageField(
        upload_to='blogs/featured/',
        blank=True,
        null=True,
        help_text="Main featured image for the post"
    )
    featured_image_alt = models.CharField(
        max_length=125,
        blank=True,
        null=True,
        help_text="Alt text for featured image (SEO)"
    )
    
    # Relationships
    category = models.ForeignKey(
        BlogCategory,
        on_delete=models.SET_NULL,
        null=True,
        related_name='blog_posts',
        db_index=True
    )
    subcategory = models.ForeignKey(
        BlogSubCategory,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='blog_posts',
        db_index=True
    )
    
    # Author and Attribution
    author_name = models.CharField(
        max_length=100,
        default="Admin",
        help_text="Display name for the author"
    )
    author_image = models.ImageField(
        upload_to='blogs/authors/',
        blank=True,
        null=True,
        help_text="Author profile picture"
    )
    author_bio = models.TextField(
        blank=True,
        null=True,
        max_length=500,
        help_text="Short author bio (max 500 chars)"
    )
    
    # SEO Fields
    meta_title = models.CharField(
        max_length=60,
        blank=True,
        null=True,
        validators=[MaxLengthValidator(60)],
        help_text="SEO title for search engines (max 60 chars)"
    )
    meta_description = models.CharField(
        max_length=160,
        blank=True,
        null=True,
        validators=[MaxLengthValidator(160)],
        help_text="SEO meta description (max 160 chars)"
    )
    meta_keywords = models.CharField(
        max_length=255,
        blank=True,
        null=True,
        help_text="Comma-separated keywords for SEO"
    )
    canonical_url = models.URLField(
        blank=True,
        null=True,
        help_text="Canonical URL (leave blank to auto-generate)"
    )
    
    # Open Graph / Social Media
    og_image = models.ImageField(
        upload_to='blogs/og_images/',
        blank=True,
        null=True,
        help_text="Custom image for social sharing (defaults to featured_image)"
    )
    og_title = models.CharField(
        max_length=95,
        blank=True,
        null=True,
        help_text="Custom title for social sharing (max 95 chars)"
    )
    og_description = models.CharField(
        max_length=200,
        blank=True,
        null=True,
        help_text="Custom description for social sharing (max 200 chars)"
    )
    
    # Publishing
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='draft',
        db_index=True
    )
    publish_date = models.DateTimeField(
        blank=True,
        null=True,
        db_index=True,
        help_text="Date and time to publish (for scheduling)"
    )
    
    # Engagement Metrics
    views_count = models.PositiveIntegerField(default=0, help_text="Total page views")
    reading_time = models.PositiveIntegerField(
        default=5,
        help_text="Estimated reading time in minutes"
    )
    
    # SEO and Indexing Control
    allow_indexing = models.BooleanField(
        default=True,
        help_text="Allow search engines to index this post"
    )
    is_featured = models.BooleanField(
        default=False,
        db_index=True,
        help_text="Mark as featured post"
    )
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "Blog Post"
        verbose_name_plural = "Blog Posts"
        ordering = ['-publish_date', '-created_at']
        indexes = [
            models.Index(fields=['slug']),
            models.Index(fields=['status', '-publish_date']),
            models.Index(fields=['category', 'status']),
            models.Index(fields=['is_featured', 'status']),
            models.Index(fields=['-created_at']),
            models.Index(fields=['title']),
        ]
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        """
        Auto-generate fields and handle slug uniqueness.
        """
        # Auto-generate slug from title
        if not self.slug:
            base_slug = slugify(self.title)
            slug = base_slug
            counter = 1
            
            # Ensure slug uniqueness
            while BlogPost.objects.filter(slug=slug).exclude(id=self.id).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            
            self.slug = slug
        
        # Auto-generate meta_title from title if not provided
        if not self.meta_title:
            self.meta_title = self.title[:60]
        
        # Auto-generate meta_description from excerpt if not provided
        if not self.meta_description and self.excerpt:
            self.meta_description = self.excerpt[:160]
        
        # Auto-generate excerpt from content if not provided
        if not self.excerpt and self.content:
            # Strip HTML tags and get first 300 chars
            from django.utils.html import strip_tags
            clean_content = strip_tags(self.content)
            self.excerpt = clean_content[:300]
        
        # Auto-calculate reading time based on content length
        if self.content:
            from django.utils.html import strip_tags
            word_count = len(strip_tags(self.content).split())
            self.reading_time = max(1, word_count // 200)  # Average reading speed: 200 wpm
        
        # Set featured_image_alt from title if not provided
        if self.featured_image and not self.featured_image_alt:
            self.featured_image_alt = f"Featured image for {self.title}"
        
        super().save(*args, **kwargs)
    
    def get_absolute_url(self):
        """Returns the canonical URL for this blog post"""
        return reverse('blog:post-detail', kwargs={'slug': self.slug})
    
    @property
    def is_published(self):
        """Check if the post is published and visible"""
        from django.utils import timezone
        if self.status == 'published':
            if self.publish_date:
                return self.publish_date <= timezone.now()
            return True
        return False
    
    @property
    def display_image(self):
        """Returns the appropriate image for display (OG image or featured image)"""
        return self.og_image if self.og_image else self.featured_image
    
    @property
    def get_category_name(self):
        """Returns category name or 'Uncategorized'"""
        return self.category.name if self.category else "Uncategorized"
    
    @property
    def get_subcategory_name(self):
        """Returns subcategory name or None"""
        return self.subcategory.name if self.subcategory else None
