TASK 2: Build a Simple API ->
Features
Add a new course
Retrieve all courses
Retrieve a specific course by ID
Update a course by ID
Delete a course by ID


Step 1: Create a Project Directory

        mkdir courses-api
        cd courses-api
        
Step 2:  Initialize the Project
         npm init -y

Step 3: Install Express
       npm install express
       
Step 4: Create the API Server
        touch index.js
        
copy the code from here and start the server

The API will run on http://localhost:3000 

This API allows you to manage a list of courses with basic CRUD operations.

Endpoints:
POST /courses: Add a new course.
Request Body: { "title": "Course Title", "description": "Course Description", "duration": "Duration" }

GET /courses: Retrieve all courses.

PUT /courses/
: Update a course by ID.
Request Body: { "title": "Updated Title", "description": "Updated Description", "duration": "Updated Duration" }

DELETE /courses/
: Delete a course by ID.

Usage:
Use Postman or any REST client to interact with the API.
Ensure to set the Content-Type to application/json for requests.
