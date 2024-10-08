const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let courses = [];

// Creating a new course
app.post('/courses', (req, res) => {
  const { title, description, duration } = req.body;

  if (!title || !description || !duration) {
    return res.status(400).json({ error: 'Title, description, and duration are required.' });
  }

  const newCourse = {
    id: courses.length + 1,
    title,
    description,
    duration
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// Get all courses
app.get('/courses', (req, res) => {
  res.json(courses);
});

// Get a course by ID
app.get('/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id, 10);
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return res.status(404).json({ error: 'Course not found.' });
  }

  res.json(course);
});

// Update a course by ID
app.put('/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id, 10);
  const { title, description, duration } = req.body;

  const courseIndex = courses.findIndex(c => c.id === courseId);

  if (courseIndex === -1) {
    return res.status(404).json({ error: 'Course not found.' });
  }

  if (!title || !description || !duration) {
    return res.status(400).json({ error: 'Title, description, and duration are required.' });
  }

  courses[courseIndex] = { id: courseId, title, description, duration };
  res.json(courses[courseIndex]);
});

// Delete a course by ID
app.delete('/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id, 10);
  const courseIndex = courses.findIndex(c => c.id === courseId);

  if (courseIndex === -1) {
    return res.status(404).json({ error: 'Course not found.' });
  }

  courses.splice(courseIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
