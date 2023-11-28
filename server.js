const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Task = mongoose.model('Task', {
    title: String,
    dueDate: Date,
    priority: String,
    status: String,
    assignee: String
});

const User = mongoose.model('User', {
    email: String,
    password: String
});

const Feedback = mongoose.model('Feedback', {
    name: String,
    email: String,
    rating: Number,
    comments: String
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.post('/api/tasks', async (req, res) => {
    try {
        const taskData = req.body;
        const newTask = new Task(taskData);
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        console.error('Error saving task:', error);
        res.status(500).json({ error: 'Failed to add task' });
    }
});

app.post('/login', (req, res) => {
    const userData = req.body;
    User.create(userData)
        .then(user => {
            res.json({ success: true, message: 'User data stored successfully' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ success: false, message: 'Error storing user data' });
        });
});

app.post('/api/feedback', async (req, res) => {
    try {
        const feedbackData = req.body;
        const newFeedback = new Feedback(feedbackData);
        const savedFeedback = await newFeedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ error: 'Failed to add feedback' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
