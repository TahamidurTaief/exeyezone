from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status




class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().select_related('category').prefetch_related(
        'tags', 'featured_images', 'features', 'screenshots', 'technologies'
    )
    serializer_class = ProductSerializer
    # allow lookups by slug in URLs (e.g. /products/<slug>/)
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = {
        'category': ['exact'],
    }
    search_fields = ['title', 'description', 'category__name', 'tags__name']
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context


class ProductCategoryViewSet(viewsets.ModelViewSet):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer

class ServiceCategoryViewSet(viewsets.ModelViewSet):
    queryset = ServiceCategory.objects.all()
    serializer_class = ServiceCategorySerializer

class CourseCategoryViewSet(viewsets.ModelViewSet):
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all().select_related('category').prefetch_related(
        'tags', 'sections__lessons', 'what_you_learn', 'requirements', 'includes'
    )
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category', 'course_type']
    search_fields = ['title', 'description', 'instructor', 'category__name', 'tags__name']
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return CourseDetailSerializer
        return CourseListSerializer
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer



class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer




class ServiceOrderViewSet(viewsets.ModelViewSet):
    queryset = ServiceOrder.objects.all()
    serializer_class = ServiceOrderSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            {"status": "success", "data": serializer.data},
            status=status.HTTP_201_CREATED,
            headers=headers
        )
    

class QuoteRequestViewSet(viewsets.ModelViewSet):
    queryset = QuoteRequest.objects.all()
    serializer_class = QuoteRequestSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            {"status": "success", "data": serializer.data},
            status=status.HTTP_201_CREATED,
            headers=headers
        )
    




class HireRequestViewSet(viewsets.ModelViewSet):
    queryset = HireRequest.objects.all()
    serializer_class = HireRequestSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            {
                "status": "success",
                "message": "Hire request submitted successfully",
                "data": serializer.data
            },
            status=status.HTTP_201_CREATED,
            headers=headers
        )


class CourseRegistrationViewSet(viewsets.ModelViewSet):
    queryset = CourseRegistration.objects.all()
    serializer_class = CourseRegistrationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            {
                "status": "success",
                "message": "Course registration submitted successfully",
                "data": serializer.data
            },
            status=status.HTTP_201_CREATED,
            headers=headers
        )