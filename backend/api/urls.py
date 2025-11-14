from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'productcategories', ProductCategoryViewSet)
router.register(r'servicecategories', ServiceCategoryViewSet)
router.register(r'categories', CourseCategoryViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'course-registrations', CourseRegistrationViewSet, basename='courseregistration')
router.register(r'tags', TagViewSet)
router.register(r'services', ServiceViewSet, basename='service')
router.register(r'teams', TeamMemberViewSet)
router.register(r'blogs', BlogViewSet)
router.register(r'service-orders', ServiceOrderViewSet, basename='serviceorder')
router.register(r'quote-requests', QuoteRequestViewSet, basename='quoterequest')
router.register(r'hire-requests', HireRequestViewSet, basename='hirerequest')



urlpatterns = [
    path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)