from django.contrib import admin
from django.db import models
from unfold.admin import ModelAdmin
from ckeditor_uploader.widgets import CKEditorUploadingWidget



from .models import *


class ServiceImageInline(admin.TabularInline):
    model = ServiceImage
    extra = 1

class ServicePackageInline(admin.TabularInline):
    model = ServicePackage
    extra = 3
    max_num = 3

@admin.register(ProductCategory)
class ProductCategoryAdmin(ModelAdmin):
    list_display = ('name',)  # Replace 'name' with actual field(s) from your model


@admin.register(ServiceCategory)
class ServiceCategoryAdmin(ModelAdmin):
    list_display = ('name',)


@admin.register(CourseCategory)
class CourseCategoryAdmin(ModelAdmin):
    list_display = ('name',)


    

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'rating', 'purchase_number', 'delivery_title')
    inlines = [ServiceImageInline, ServicePackageInline]

    formfield_overrides = {
        models.TextField: {'widget': CKEditorUploadingWidget},
    }




@admin.register(ServiceImage)
class ServiceImageAdmin(ModelAdmin):
    list_display = ('id', 'service', 'image')


@admin.register(ServicePackage)
class ServicePackageAdmin(ModelAdmin):
    list_display = ('service', 'package_type', 'price', 'delivery_time', 'revision_count')
    list_filter = ('package_type',)


class ProductFeaturedImageInline(admin.TabularInline):
    model = ProductFeaturedImage
    extra = 3

class ProductFeatureInline(admin.TabularInline):
    model = ProductFeature
    extra = 5

class ProductScreenshotInline(admin.TabularInline):
    model = ProductScreenshot
    extra = 3

class ProductTechnologyInline(admin.TabularInline):
    model = ProductTechnology
    extra = 5


@admin.register(Product)
class ProductAdmin(ModelAdmin):
    list_display = ('title', 'slug', 'price', 'rating', 'sales_count', 'created_at')
    prepopulated_fields = {"slug": ("title",)}
    list_filter = ('created_at', 'updated_at', 'category')
    search_fields = ('title', 'description')
    filter_horizontal = ('tags',)
    inlines = [ProductFeaturedImageInline, ProductFeatureInline, ProductScreenshotInline, ProductTechnologyInline]


@admin.register(ProductFeaturedImage)
class ProductFeaturedImageAdmin(ModelAdmin):
    list_display = ('product', 'order')
    list_filter = ('product',)


@admin.register(ProductFeature)
class ProductFeatureAdmin(ModelAdmin):
    list_display = ('product', 'name', 'order')
    list_filter = ('product',)


@admin.register(ProductScreenshot)
class ProductScreenshotAdmin(ModelAdmin):
    list_display = ('product', 'title', 'screen_type', 'order')
    list_filter = ('product', 'screen_type')


@admin.register(ProductTechnology)
class ProductTechnologyAdmin(ModelAdmin):
    list_display = ('product', 'name', 'order')
    list_filter = ('product',)


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


@admin.register(ServiceOrder)
class ServiceOrderAdmin(ModelAdmin):
    list_display = ('service_title', 'package_type', 'full_name', 'email')
    list_filter = ('status',)
    search_fields = ('service_title', 'full_name')
    readonly_fields = ('created_at', 'updated_at')



@admin.register(QuoteRequest)
class QuoteRequestAdmin(ModelAdmin):
    list_display = ('name', 'email', 'product', 'status', 'created_at')
    list_filter = ('status', 'product', 'created_at')
    search_fields = ('name', 'email', 'product__title')
    readonly_fields = ('created_at', 'updated_at')
    
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.select_related('product')



@admin.register(HireRequest)
class HireRequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'service_title', 'package_type', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('name', 'email', 'service__title')
    readonly_fields = ('created_at', 'updated_at')
    list_per_page = 20
    
    def service_title(self, obj):
        return obj.service.title if obj.service else '-'
    service_title.short_description = 'Service'
    
    def package_type(self, obj):
        return obj.package.package_type if obj.package else '-'
    package_type.short_description = 'Package'