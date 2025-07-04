# Generated by Django 5.2.1 on 2025-05-20 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_coursecategory_productcategory_servicecategory_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='coursecategory',
            name='total_courses',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='coursecategory',
            name='total_instructors',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='coursecategory',
            name='total_rating',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='coursecategory',
            name='total_reviews',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='coursecategory',
            name='total_students',
            field=models.IntegerField(default=0),
        ),
    ]
