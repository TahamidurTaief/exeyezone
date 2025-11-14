# Generated migration to populate course slugs
from django.db import migrations
from django.utils.text import slugify


def populate_slugs(apps, schema_editor):
    Course = apps.get_model('api', 'Course')
    for course in Course.objects.all():
        if not course.slug:
            base = slugify(course.title)[:200]
            slug = base
            i = 1
            while Course.objects.filter(slug=slug).exclude(pk=course.pk).exists():
                slug = f"{base}-{i}"
                i += 1
            course.slug = slug
            course.save()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_course_instructor_course_language_and_more'),
    ]

    operations = [
        migrations.RunPython(populate_slugs, reverse_code=migrations.RunPython.noop),
    ]
