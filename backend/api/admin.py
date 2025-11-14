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


class CourseSectionInline(admin.TabularInline):
    model = CourseSection
    extra = 1
    show_change_link = True


class CourseLessonInline(admin.TabularInline):
    model = CourseLesson
    extra = 3


class CourseWhatYouLearnInline(admin.TabularInline):
    model = CourseWhatYouLearn
    extra = 3


class CourseRequirementInline(admin.TabularInline):
    model = CourseRequirement
    extra = 3


class CourseIncludesInline(admin.TabularInline):
    model = CourseIncludes
    extra = 3


@admin.register(Course)
class CourseAdmin(ModelAdmin):
    list_display = ('title', 'slug', 'course_type', 'instructor', 'price', 'rating', 'students_count', 'created_at')
    list_filter = ('course_type', 'category', 'language', 'created_at')
    search_fields = ('title', 'description', 'instructor')
    filter_horizontal = ('tags',)
    prepopulated_fields = {"slug": ("title",)}
    inlines = [CourseSectionInline, CourseWhatYouLearnInline, CourseRequirementInline, CourseIncludesInline]
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'short_description', 'description', 'img')
        }),
        ('Course Details', {
            'fields': ('category', 'tags', 'course_type', 'instructor', 'language')
        }),
        ('Pricing', {
            'fields': ('price', 'original_price')
        }),
        ('Statistics', {
            'fields': ('rating', 'students_count')
        }),
        ('Media', {
            'fields': ('video_url',)
        }),
        ('Dates', {
            'fields': ('deadline',)
        }),
    )


@admin.register(CourseSection)
class CourseSectionAdmin(ModelAdmin):
    list_display = ('course', 'title', 'order')
    list_filter = ('course',)
    search_fields = ('title', 'course__title')
    inlines = [CourseLessonInline]


@admin.register(CourseLesson)
class CourseLessonAdmin(ModelAdmin):
    list_display = ('title', 'section', 'duration', 'is_preview', 'order')
    list_filter = ('section__course', 'is_preview')
    search_fields = ('title', 'section__title')


@admin.register(CourseWhatYouLearn)
class CourseWhatYouLearnAdmin(ModelAdmin):
    list_display = ('course', 'text', 'order')
    list_filter = ('course',)


@admin.register(CourseRequirement)
class CourseRequirementAdmin(ModelAdmin):
    list_display = ('course', 'text', 'order')
    list_filter = ('course',)


@admin.register(CourseIncludes)
class CourseIncludesAdmin(ModelAdmin):
    list_display = ('course', 'icon', 'text', 'order')
    list_filter = ('course', 'icon')


@admin.register(CourseRegistration)
class CourseRegistrationAdmin(ModelAdmin):
    list_display = ('name', 'email', 'course', 'occupation', 'status', 'created_at')
    list_filter = ('status', 'occupation', 'course', 'created_at')
    search_fields = ('name', 'email', 'course__title')
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Student Information', {
            'fields': ('name', 'email', 'phone', 'occupation')
        }),
        ('Course Information', {
            'fields': ('course', 'message')
        }),
        ('Status', {
            'fields': ('status',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )


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