# Generated migration to make slug unique
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_populate_course_slugs'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='slug',
            field=models.SlugField(blank=True, max_length=255, unique=True),
        ),
    ]
