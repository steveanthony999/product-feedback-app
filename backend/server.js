const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome' });
});

// Routes
// app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/feedbacks', require('./routes/feedbackRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
