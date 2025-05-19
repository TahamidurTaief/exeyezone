from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import (
    Tag, Product, Course, Service,
    ServiceImage, ServicePackage,
    TeamMember, Blog
)

# Inline for ServiceImage
class ServiceImageInline(admin.TabularInline):
    model = ServiceImage
    extra = 1


# Inline for ServicePackage
class ServicePackageInline(admin.TabularInline):
    model = ServicePackage
    extra = 3
    max_num = 3


@admin.register(Service)
class ServiceAdmin(ModelAdmin):
    list_display = ('title', 'rating', 'purchase_number', 'delivery_title')
    inlines = [ServiceImageInline, ServicePackageInline]


@admin.register(ServiceImage)
class ServiceImageAdmin(ModelAdmin):
    list_display = ('id', 'service', 'image')


@admin.register(ServicePackage)
class ServicePackageAdmin(ModelAdmin):
    list_display = ('service', 'package_type', 'price', 'delivery_time', 'revision_count')
    list_filter = ('package_type',)


@admin.register(Product)
class ProductAdmin(ModelAdmin):
    list_display = ('title', 'created_at', 'updated_at')
    list_filter = ('created_at', 'updated_at')
    search_fields = ('title', 'description')
    filter_horizontal = ('tags',)


@admin.register(Course)
class CourseAdmin(ModelAdmin):
    list_display = ('title', 'course_type', 'deadline', 'price', 'created_at')
    list_filter = ('course_type', 'deadline')
    search_fields = ('title', 'description')
    filter_horizontal = ('tags',)


@admin.register(Tag)
class TagAdmin(ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(TeamMember)
class TeamMemberAdmin(ModelAdmin):
    list_display = ('name', 'position')
    search_fields = ('name', 'position')


@admin.register(Blog)
class BlogAdmin(ModelAdmin):
    list_display = ('title', 'author', 'created_at', 'updated_at')
    search_fields = ('title', 'author', 'content')
    prepopulated_fields = {"slug": ("title",)}
