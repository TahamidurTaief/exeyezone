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


class CourseLessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseLesson
        fields = ['id', 'title', 'duration', 'is_preview', 'video_id', 'order']


class CourseSectionSerializer(serializers.ModelSerializer):
    lessons = CourseLessonSerializer(many=True, read_only=True)
    lectures = serializers.SerializerMethodField()
    duration = serializers.SerializerMethodField()
    
    class Meta:
        model = CourseSection
        fields = ['id', 'title', 'order', 'lessons', 'lectures', 'duration']
    
    def get_lectures(self, obj):
        return obj.lessons.count()
    
    def get_duration(self, obj):
        # Calculate total duration from lessons
        # This is a simple implementation, you might want to enhance it
        return "TBD"


class CourseWhatYouLearnSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseWhatYouLearn
        fields = ['id', 'text', 'order']


class CourseRequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseRequirement
        fields = ['id', 'text', 'order']


class CourseIncludesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseIncludes
        fields = ['id', 'icon', 'text', 'order']


class CourseListSerializer(serializers.ModelSerializer):
    """Lightweight serializer for course listing"""
    tags = TagSerializer(many=True, read_only=True)
    category = CourseCategorySerializer(read_only=True)
    img = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = [
            'id', 'slug', 'img', 'title', 'short_description', 'category', 
            'tags', 'course_type', 'price', 'original_price', 'rating', 
            'students_count', 'instructor', 'created_at'
        ]
    
    def get_img(self, obj):
        request = self.context.get('request')
        if obj.img and hasattr(obj.img, 'url'):
            if request is not None:
                return request.build_absolute_uri(obj.img.url)
            return obj.img.url
        return None


class CourseDetailSerializer(serializers.ModelSerializer):
    """Full serializer for course detail page"""
    tags = TagSerializer(many=True, read_only=True)
    category = CourseCategorySerializer(read_only=True)
    sections = CourseSectionSerializer(many=True, read_only=True)
    what_you_learn = CourseWhatYouLearnSerializer(many=True, read_only=True)
    requirements = CourseRequirementSerializer(many=True, read_only=True)
    includes = CourseIncludesSerializer(many=True, read_only=True)
    img = serializers.SerializerMethodField()
    last_updated = serializers.SerializerMethodField()
    related_courses = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = [
            'id', 'slug', 'img', 'title', 'short_description', 'description',
            'category', 'tags', 'course_type', 'instructor', 'language',
            'price', 'original_price', 'rating', 'students_count',
            'video_url', 'deadline', 'created_at', 'updated_at', 'last_updated',
            'sections', 'what_you_learn', 'requirements', 'includes', 'related_courses'
        ]
    
    def get_img(self, obj):
        request = self.context.get('request')
        if obj.img and hasattr(obj.img, 'url'):
            if request is not None:
                return request.build_absolute_uri(obj.img.url)
            return obj.img.url
        return None
    
    def get_last_updated(self, obj):
        return obj.updated_at.strftime('%B %Y')
    
    def get_related_courses(self, obj):
        # Get related courses from the same category
        related = Course.objects.filter(category=obj.category).exclude(id=obj.id)[:4]
        return CourseListSerializer(related, many=True, context=self.context).data


class CourseRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseRegistration
        fields = '__all__'
        read_only_fields = ('status', 'created_at', 'updated_at')


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
    product_id = serializers.IntegerField(write_only=True, required=False, allow_null=True)
    
    class Meta:
        model = QuoteRequest
        fields = '__all__'
        read_only_fields = ('status', 'created_at', 'updated_at')
    
    def create(self, validated_data):
        # Extract product_id if provided
        product_id = validated_data.pop('product_id', None)
        
        # Set the product field if product_id is provided
        if product_id:
            try:
                product = Product.objects.get(id=product_id)
                validated_data['product'] = product
            except Product.DoesNotExist:
                pass  # If product doesn't exist, leave it as None
        
        return super().create(validated_data)



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