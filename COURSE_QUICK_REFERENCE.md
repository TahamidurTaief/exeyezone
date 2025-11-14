# Course System Quick Reference

## Admin Panel - Adding a New Course

1. **Go to Django Admin:** http://localhost:8000/admin
2. **Navigate to:** Courses → Add Course
3. **Fill in Basic Information:**
   - Title (slug auto-generates)
   - Short Description (500 chars max)
   - Description (rich text editor)
   - Upload course image
   
4. **Course Details:**
   - Select Category
   - Add Tags
   - Choose Course Type (Live/Recorded)
   - Instructor Name
   - Language
   
5. **Pricing:**
   - Price (required)
   - Original Price (for showing discount)
   
6. **Statistics:**
   - Rating (0-5)
   - Students Count
   
7. **Media:**
   - Video URL (YouTube video ID)
   
8. **Add Inline Content:**
   - **Sections:** Add course sections with lessons
   - **What You'll Learn:** Add learning outcomes (bullet points)
   - **Requirements:** Add prerequisites
   - **Includes:** Add what's included (video hours, documents, etc.)

9. **Save** the course

## Frontend URLs

- **All Courses:** http://localhost:3001/courses
- **Course by Category:** http://localhost:3001/courses?category={id}
- **Course Detail:** http://localhost:3001/courses/{slug}

## API Endpoints

### Get All Courses
```bash
GET http://localhost:8000/api/courses/
```

### Get Course by Slug
```bash
GET http://localhost:8000/api/courses/complete-web-development-bootcamp-2024/
```

### Filter by Category
```bash
GET http://localhost:8000/api/courses/?category=1
```

### Submit Registration
```bash
POST http://localhost:8000/api/course-registrations/
Content-Type: application/json

{
  "course": 1,
  "name": "Student Name",
  "phone": "+1234567890",
  "email": "student@example.com",
  "occupation": "student",
  "message": "I want to enroll"
}
```

## Managing Enrollments

1. **Go to Admin Panel**
2. **Navigate to:** Course Registrations
3. **View all enrollment requests**
4. **Change status:** pending → approved/rejected
5. **Filter by:** status, course, date

## Common Tasks

### Adding Course Content Structure

**Add a Section:**
1. Edit course
2. In "Course sections" inline, click "Add another Course section"
3. Enter title and order number
4. Save

**Add Lessons to Section:**
1. Go to Course Sections in admin
2. Click on the section
3. In "Course lessons" inline, add lessons
4. For preview lessons: check "Is preview" and add video ID

### Customizing Course Includes Icons

Available icons:
- `video` - Video content
- `document` - Articles/Documents
- `download` - Downloadable resources
- `infinity` - Lifetime access
- `mobile` - Mobile access
- `trophy` - Certificate

### Testing the System

1. **Start Backend:**
   ```bash
   cd backend
   source .venv/bin/activate
   python manage.py runserver
   ```

2. **Start Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access:**
   - Frontend: http://localhost:3001
   - Backend API: http://localhost:8000/api
   - Admin: http://localhost:8000/admin

### Populating Sample Data

```bash
cd backend
source .venv/bin/activate
python populate_courses.py
```

## Troubleshooting

**Course not appearing?**
- Check if it has a slug
- Check if it's saved properly
- Check category assignment

**Images not loading?**
- Check MEDIA_URL and MEDIA_ROOT in settings
- Ensure images are uploaded to media/courses/
- Check file permissions

**Slug conflicts?**
- System auto-generates unique slugs
- Format: `{title-slug}` or `{title-slug}-{number}`

**Registration not working?**
- Check backend server is running
- Check API endpoint URL in frontend
- Check console for errors
- Verify course ID is correct

## Data Model Relationships

```
Course
├── CourseSection (multiple)
│   └── CourseLesson (multiple)
├── CourseWhatYouLearn (multiple)
├── CourseRequirement (multiple)
├── CourseIncludes (multiple)
└── CourseRegistration (multiple)
```

## Important Files

**Backend:**
- `api/models.py` - Data models
- `api/views.py` - API endpoints
- `api/serializers.py` - Data serialization
- `api/admin.py` - Admin panel config

**Frontend:**
- `app/courses/page.js` - Course listing
- `app/courses/[slug]/page.js` - Course detail
- `utils/api/course.js` - API functions

## Default Admin Credentials

Create superuser if not exists:
```bash
python manage.py createsuperuser
```

Then follow prompts to set username/password.
