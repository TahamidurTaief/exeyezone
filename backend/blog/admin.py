from django.contrib import admin
from django.utils.html import format_html
from django.urls import reverse
from django.utils import timezone
from unfold.admin import ModelAdmin
from .models import BlogCategory, BlogSubCategory, BlogPost


@admin.register(BlogCategory)
class BlogCategoryAdmin(ModelAdmin):
    """
    Admin interface for Blog Categories with SEO optimization.
    """
    list_display = [
        'name',
        'slug',
        'display_order',
        'post_count_display',
        'is_active',
        'created_at',
    ]
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'slug', 'description', 'meta_title', 'meta_description']
    prepopulated_fields = {'slug': ('name',)}
    ordering = ['display_order', 'name']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'slug', 'description', 'og_image')
        }),
        ('SEO Settings', {
            'fields': ('meta_title', 'meta_description'),
            'classes': ('collapse',),
            'description': 'Search engine optimization fields'
        }),
        ('Display Settings', {
            'fields': ('display_order', 'is_active')
        }),
    )
    
    readonly_fields = ['created_at', 'updated_at']
    
    def post_count_display(self, obj):
        """Display published post count"""
        count = obj.blog_posts.filter(status='published').count()
        return format_html(
            '<span style="color: #28a745; font-weight: bold;">{}</span>',
            count
        )
    post_count_display.short_description = 'Published Posts'
    
    def save_model(self, request, obj, form, change):
        """Auto-generate SEO fields if not provided"""
        if not obj.meta_title:
            obj.meta_title = obj.name[:60]
        super().save_model(request, obj, form, change)


@admin.register(BlogSubCategory)
class BlogSubCategoryAdmin(ModelAdmin):
    """
    Admin interface for Blog SubCategories.
    """
    list_display = [
        'name',
        'category',
        'slug',
        'display_order',
        'post_count_display',
        'is_active',
        'created_at',
    ]
    list_filter = ['is_active', 'category', 'created_at']
    search_fields = ['name', 'slug', 'description', 'category__name']
    prepopulated_fields = {'slug': ('name',)}
    ordering = ['category__display_order', 'display_order', 'name']
    autocomplete_fields = ['category']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('category', 'name', 'slug', 'description', 'og_image')
        }),
        ('SEO Settings', {
            'fields': ('meta_title', 'meta_description'),
            'classes': ('collapse',),
        }),
        ('Display Settings', {
            'fields': ('display_order', 'is_active')
        }),
    )
    
    readonly_fields = ['created_at', 'updated_at']
    
    def post_count_display(self, obj):
        """Display published post count"""
        count = obj.blog_posts.filter(status='published').count()
        return format_html(
            '<span style="color: #28a745; font-weight: bold;">{}</span>',
            count
        )
    post_count_display.short_description = 'Published Posts'


@admin.register(BlogPost)
class BlogPostAdmin(ModelAdmin):
    """
    Comprehensive admin interface for Blog Posts with advanced SEO features.
    """
    list_display = [
        'title',
        'category',
        'author_name',
        'status_badge',
        'is_featured',
        'views_count',
        'publish_date',
        'created_at',
    ]
    list_filter = [
        'status',
        'is_featured',
        'allow_indexing',
        'category',
        'subcategory',
        'publish_date',
        'created_at',
    ]
    search_fields = [
        'title',
        'slug',
        'excerpt',
        'content',
        'meta_keywords',
        'author_name',
    ]
    prepopulated_fields = {'slug': ('title',)}
    autocomplete_fields = ['category', 'subcategory']
    date_hierarchy = 'publish_date'
    ordering = ['-created_at']
    
    # Bulk actions
    actions = [
        'make_published',
        'make_draft',
        'make_featured',
        'remove_featured',
    ]
    
    fieldsets = (
        ('Content', {
            'fields': (
                'title',
                'slug',
                'excerpt',
                'content',
            )
        }),
        ('Media', {
            'fields': (
                'featured_image',
                'featured_image_alt',
            )
        }),
        ('Organization', {
            'fields': (
                'category',
                'subcategory',
            )
        }),
        ('Author Information', {
            'fields': (
                'author_name',
                'author_image',
                'author_bio',
            ),
            'classes': ('collapse',),
        }),
        ('SEO - Basic', {
            'fields': (
                'meta_title',
                'meta_description',
                'meta_keywords',
                'canonical_url',
            ),
            'description': 'Essential SEO fields for search engine optimization'
        }),
        ('SEO - Social Media (Open Graph)', {
            'fields': (
                'og_image',
                'og_title',
                'og_description',
            ),
            'classes': ('collapse',),
            'description': 'Social media sharing optimization (Facebook, Twitter, LinkedIn)'
        }),
        ('Publishing', {
            'fields': (
                'status',
                'publish_date',
                'allow_indexing',
                'is_featured',
            )
        }),
        ('Analytics', {
            'fields': (
                'views_count',
                'reading_time',
            ),
            'classes': ('collapse',),
        }),
        ('Timestamps', {
            'fields': (
                'created_at',
                'updated_at',
            ),
            'classes': ('collapse',),
        }),
    )
    
    readonly_fields = ['created_at', 'updated_at', 'views_count', 'reading_time']
    
    def status_badge(self, obj):
        """Display status with color coding"""
        colors = {
            'draft': '#6c757d',
            'published': '#28a745',
            'scheduled': '#ffc107',
            'archived': '#dc3545',
        }
        color = colors.get(obj.status, '#6c757d')
        return format_html(
            '<span style="background: {}; color: white; padding: 3px 10px; border-radius: 3px; font-weight: bold;">{}</span>',
            color,
            obj.get_status_display()
        )
    status_badge.short_description = 'Status'
    
    def save_model(self, request, obj, form, change):
        """
        Handle auto-generation of fields and validation.
        """
        # Set publish_date to now if status is published and no date set
        if obj.status == 'published' and not obj.publish_date:
            obj.publish_date = timezone.now()
        
        super().save_model(request, obj, form, change)
    
    # Bulk Actions
    @admin.action(description='Mark selected posts as Published')
    def make_published(self, request, queryset):
        """Bulk publish posts"""
        updated = queryset.update(
            status='published',
            publish_date=timezone.now()
        )
        self.message_user(request, f'{updated} post(s) marked as published.')
    
    @admin.action(description='Mark selected posts as Draft')
    def make_draft(self, request, queryset):
        """Bulk mark as draft"""
        updated = queryset.update(status='draft')
        self.message_user(request, f'{updated} post(s) marked as draft.')
    
    @admin.action(description='Mark selected posts as Featured')
    def make_featured(self, request, queryset):
        """Bulk mark as featured"""
        updated = queryset.update(is_featured=True)
        self.message_user(request, f'{updated} post(s) marked as featured.')
    
    @admin.action(description='Remove Featured status')
    def remove_featured(self, request, queryset):
        """Bulk remove featured status"""
        updated = queryset.update(is_featured=False)
        self.message_user(request, f'{updated} post(s) removed from featured.')
    
    def get_queryset(self, request):
        """Optimize admin queryset with select_related"""
        queryset = super().get_queryset(request)
        return queryset.select_related('category', 'subcategory')


# Admin site customization
admin.site.site_header = "Blog Administration"
admin.site.site_title = "Blog Admin Portal"
admin.site.index_title = "Welcome to Blog Administration"
