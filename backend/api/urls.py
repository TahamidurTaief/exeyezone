from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *
from django.conf import settings
from django.conf.urls.static import static



router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'tags', TagViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'teams', TeamMemberViewSet)
router.register(r'blogs', BlogViewSet)

urlpatterns = [
    path('', include(router.urls)),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)