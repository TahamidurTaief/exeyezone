from rest_framework import viewsets, status, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend, FilterSet, CharFilter, BooleanFilter, DateTimeFilter
from django.db.models import Q, Count, Prefetch
from django.utils import timezone
from django.shortcuts import get_object_or_404

from .models import BlogCategory, BlogSubCategory, BlogPost
from .serializers import (
    BlogCategoryListSerializer,
    BlogCategoryDetailSerializer,
    BlogSubCategoryListSerializer,
    BlogSubCategoryDetailSerializer,
    BlogPostListSerializer,
    BlogPostDetailSerializer,
    BlogPostCreateUpdateSerializer,
    BlogPostSEOSerializer,
)


class StandardResultsSetPagination(PageNumberPagination):
    """
    Standard pagination for blog listings.
    Configurable page size with reasonable defaults.
    """
    page_size = 12
    page_size_query_param = 'page_size'
    max_page_size = 100


class BlogPostFilter(FilterSet):
    """
    Advanced filtering for blog posts.
    Supports search, category, status, and date range filtering.
    """
    search = CharFilter(method='filter_search', label='Search')
    category = CharFilter(field_name='category__slug', lookup_expr='exact')
    subcategory = CharFilter(field_name='subcategory__slug', lookup_expr='exact')
    status = CharFilter(field_name='status', lookup_expr='exact')
    is_featured = BooleanFilter(field_name='is_featured')
    date_from = DateTimeFilter(field_name='publish_date', lookup_expr='gte')
    date_to = DateTimeFilter(field_name='publish_date', lookup_expr='lte')
    
    class Meta:
        model = BlogPost
        fields = ['category', 'subcategory', 'status', 'is_featured']
    
    def filter_search(self, queryset, name, value):
        """
        Search across title, excerpt, content, and keywords.
        Case-insensitive and supports partial matches.
        """
        return queryset.filter(
            Q(title__icontains=value) |
            Q(excerpt__icontains=value) |
            Q(content__icontains=value) |
            Q(meta_keywords__icontains=value) |
            Q(author_name__icontains=value)
        )


class BlogCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for blog categories.
    
    Endpoints:
    - GET /api/blog/categories/ - List all active categories
    - GET /api/blog/categories/{slug}/ - Get category details
    - GET /api/blog/categories/{slug}/posts/ - Get posts in category
    """
    lookup_field = 'slug'
    pagination_class = StandardResultsSetPagination
    
    def get_queryset(self):
        """
        Optimized queryset with prefetching.
        Only returns active categories with post counts.
        """
        queryset = BlogCategory.objects.filter(is_active=True).annotate(
            post_count=Count(
                'blog_posts',
                filter=Q(blog_posts__status='published')
            )
        ).prefetch_related(
            Prefetch(
                'subcategories',
                queryset=BlogSubCategory.objects.filter(is_active=True).annotate(
                    post_count=Count(
                        'blog_posts',
                        filter=Q(blog_posts__status='published')
                    )
                )
            )
        ).order_by('display_order', 'name')
        
        return queryset
    
    def get_serializer_class(self):
        """Use detailed serializer for retrieve, list serializer for list"""
        if self.action == 'retrieve':
            return BlogCategoryDetailSerializer
        return BlogCategoryListSerializer
    
    @action(detail=True, methods=['get'])
    def posts(self, request, slug=None):
        """
        Get all published posts in this category.
        Supports pagination and sorting.
        """
        category = self.get_object()
        
        # Get published posts with optimized queries
        posts = BlogPost.objects.filter(
            category=category,
            status='published',
            publish_date__lte=timezone.now()
        ).select_related(
            'category',
            'subcategory'
        ).order_by('-publish_date')
        
        # Apply pagination
        page = self.paginate_queryset(posts)
        if page is not None:
            serializer = BlogPostListSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = BlogPostListSerializer(posts, many=True)
        return Response(serializer.data)


class BlogSubCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for blog subcategories.
    
    Endpoints:
    - GET /api/blog/subcategories/ - List all active subcategories
    - GET /api/blog/subcategories/{slug}/ - Get subcategory details
    - GET /api/blog/subcategories/{slug}/posts/ - Get posts in subcategory
    """
    lookup_field = 'slug'
    pagination_class = StandardResultsSetPagination
    
    def get_queryset(self):
        """
        Optimized queryset with category and post count.
        """
        queryset = BlogSubCategory.objects.filter(
            is_active=True,
            category__is_active=True
        ).select_related('category').annotate(
            post_count=Count(
                'blog_posts',
                filter=Q(blog_posts__status='published')
            )
        ).order_by('category__display_order', 'display_order', 'name')
        
        return queryset
    
    def get_serializer_class(self):
        """Use detailed serializer for retrieve, list serializer for list"""
        if self.action == 'retrieve':
            return BlogSubCategoryDetailSerializer
        return BlogSubCategoryListSerializer
    
    @action(detail=True, methods=['get'])
    def posts(self, request, slug=None):
        """
        Get all published posts in this subcategory.
        """
        subcategory = self.get_object()
        
        posts = BlogPost.objects.filter(
            subcategory=subcategory,
            status='published',
            publish_date__lte=timezone.now()
        ).select_related(
            'category',
            'subcategory'
        ).order_by('-publish_date')
        
        page = self.paginate_queryset(posts)
        if page is not None:
            serializer = BlogPostListSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = BlogPostListSerializer(posts, many=True)
        return Response(serializer.data)


class BlogPostViewSet(viewsets.ModelViewSet):
    """
    Comprehensive ViewSet for blog posts.
    
    Endpoints:
    - GET /api/blog/posts/ - List all published posts (with filtering, search, pagination)
    - GET /api/blog/posts/{slug}/ - Get single post by slug
    - POST /api/blog/posts/ - Create new post (admin)
    - PUT/PATCH /api/blog/posts/{slug}/ - Update post (admin)
    - DELETE /api/blog/posts/{slug}/ - Delete post (admin)
    - GET /api/blog/posts/featured/ - Get featured posts
    - GET /api/blog/posts/recent/ - Get recent posts
    - GET /api/blog/posts/popular/ - Get most viewed posts
    """
    lookup_field = 'slug'
    pagination_class = StandardResultsSetPagination
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = BlogPostFilter
    search_fields = ['title', 'excerpt', 'content', 'meta_keywords']
    ordering_fields = ['publish_date', 'created_at', 'views_count', 'reading_time', 'title']
    ordering = ['-publish_date']
    
    def get_queryset(self):
        """
        Optimized queryset with select_related and prefetch_related.
        Default: returns only published posts for public access.
        """
        queryset = BlogPost.objects.select_related(
            'category',
            'subcategory',
            'subcategory__category'
        )
        
        # Filter by published status for list view (public access)
        if self.action == 'list':
            queryset = queryset.filter(
                status='published',
                publish_date__lte=timezone.now()
            )
        
        return queryset
    
    def get_serializer_class(self):
        """Return appropriate serializer based on action"""
        if self.action in ['create', 'update', 'partial_update']:
            return BlogPostCreateUpdateSerializer
        elif self.action == 'retrieve':
            return BlogPostDetailSerializer
        return BlogPostListSerializer
    
    def retrieve(self, request, *args, **kwargs):
        """
        Get single post and increment view count.
        """
        instance = self.get_object()
        
        # Increment view count
        instance.views_count += 1
        instance.save(update_fields=['views_count'])
        
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """
        Get featured blog posts.
        Returns posts marked as featured, published and sorted by publish date.
        """
        posts = self.get_queryset().filter(
            is_featured=True,
            status='published',
            publish_date__lte=timezone.now()
        ).order_by('-publish_date')[:10]
        
        serializer = BlogPostListSerializer(posts, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def recent(self, request):
        """
        Get most recent blog posts.
        Returns the latest published posts.
        """
        limit = int(request.query_params.get('limit', 10))
        limit = min(limit, 50)  # Cap at 50
        
        posts = self.get_queryset().filter(
            status='published',
            publish_date__lte=timezone.now()
        ).order_by('-publish_date')[:limit]
        
        serializer = BlogPostListSerializer(posts, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def popular(self, request):
        """
        Get most popular (most viewed) blog posts.
        """
        limit = int(request.query_params.get('limit', 10))
        limit = min(limit, 50)
        
        posts = self.get_queryset().filter(
            status='published',
            publish_date__lte=timezone.now()
        ).order_by('-views_count', '-publish_date')[:limit]
        
        serializer = BlogPostListSerializer(posts, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def search(self, request):
        """
        Advanced search endpoint.
        Searches across title, excerpt, content, and keywords.
        """
        query = request.query_params.get('q', '')
        
        if not query:
            return Response(
                {'detail': 'Search query parameter "q" is required.'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        posts = self.get_queryset().filter(
            Q(title__icontains=query) |
            Q(excerpt__icontains=query) |
            Q(content__icontains=query) |
            Q(meta_keywords__icontains=query)
        ).filter(
            status='published',
            publish_date__lte=timezone.now()
        ).distinct().order_by('-publish_date')
        
        page = self.paginate_queryset(posts)
        if page is not None:
            serializer = BlogPostListSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = BlogPostListSerializer(posts, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        """
        Get posts by category slug.
        Usage: /api/blog/posts/by_category/?category=technology
        """
        category_slug = request.query_params.get('category')
        
        if not category_slug:
            return Response(
                {'detail': 'Category slug parameter is required.'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        posts = self.get_queryset().filter(
            category__slug=category_slug,
            status='published',
            publish_date__lte=timezone.now()
        ).order_by('-publish_date')
        
        page = self.paginate_queryset(posts)
        if page is not None:
            serializer = BlogPostListSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = BlogPostListSerializer(posts, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def sitemap(self, request):
        """
        Generate sitemap data for all published posts.
        Returns minimal data needed for XML sitemap generation.
        """
        posts = BlogPost.objects.filter(
            status='published',
            publish_date__lte=timezone.now(),
            allow_indexing=True
        ).only(
            'slug',
            'title',
            'meta_description',
            'publish_date',
            'updated_at'
        ).order_by('-publish_date')
        
        serializer = BlogPostSEOSerializer(posts, many=True)
        return Response(serializer.data)
