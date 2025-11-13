from rest_framework import serializers
from .models import *


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']


class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseCategory
        fields = ['id', 'name', 'total_courses', 'total_students']

        
class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = ['id', 'name']


class ServiceCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceCategory
        fields = ['id', 'name']


class ProductFeaturedImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    
    class Meta:
        model = ProductFeaturedImage
        fields = ['id', 'image', 'order']
    
    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image and hasattr(obj.image, 'url'):
            if request is not None:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None


class ProductFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductFeature
        fields = ['id', 'name', 'icon', 'order']


class ProductScreenshotSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    
    class Meta:
        model = ProductScreenshot
        fields = ['id', 'image', 'title', 'screen_type', 'link', 'order']
    
    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image and hasattr(obj.image, 'url'):
            if request is not None:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None


class ProductTechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductTechnology
        fields = ['id', 'name', 'icon', 'order']


class ProductSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    category = ProductCategorySerializer(read_only=True)
    featured_images = ProductFeaturedImageSerializer(many=True, read_only=True)
    features = ProductFeatureSerializer(many=True, read_only=True)
    screenshots = ProductScreenshotSerializer(many=True, read_only=True)
    technologies = ProductTechnologySerializer(many=True, read_only=True)
    product_img = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'
    
    def get_product_img(self, obj):
        request = self.context.get('request')
        if obj.product_img and hasattr(obj.product_img, 'url'):
            if request is not None:
                return request.build_absolute_uri(obj.product_img.url)
            return obj.product_img.url
        return None


class CourseSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    category = CourseCategorySerializer(read_only=True)

    class Meta:
        model = Course
        fields = ['id', 'img', 'title', 'description', 'category', 'tags', 'course_type', 'deadline', 'price', 'created_at']


class ServiceImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceImage
        fields = ['id', 'image']


class ServicePackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicePackage
        fields = '__all__'


class ServiceSerializer(serializers.ModelSerializer):
    service_images = ServiceImageSerializer(many=True, read_only=True)
    service_packages = ServicePackageSerializer(many=True, read_only=True)
    category = serializers.CharField(source='category.name')

    class Meta:
        model = Service
        fields = ['id', 'title', 'category', 'description', 'rating', 'purchase_number', 'delivery_title', 'service_images', 'service_packages']


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'



class ServiceOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceOrder
        fields = '__all__'
        read_only_fields = ('status', 'created_at', 'updated_at')



class QuoteRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuoteRequest
        fields = '__all__'
        read_only_fields = ('status', 'created_at', 'updated_at')



class HireRequestSerializer(serializers.ModelSerializer):
    service_title = serializers.CharField(source='service.title', read_only=True)
    package_details = serializers.SerializerMethodField()

    class Meta:
        model = HireRequest
        fields = '__all__'
        read_only_fields = ('status', 'created_at', 'updated_at')

    def get_package_details(self, obj):
        if obj.package:
            return {
                'package_type': obj.package.package_type,
                'price': str(obj.package.price),
                'delivery_time': obj.package.delivery_time,
                'revision_count': obj.package.revision_count
            }
        return None