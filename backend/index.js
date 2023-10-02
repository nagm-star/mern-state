import express from 'express';
// const dotenv = require('dotenv');
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
// const userRouter  = require('./routes/userRoutes');
// connectDb();

mongoose
  .connect("mongodb+srv://mgsydqNn7WIYYMzM:mgsydqNn7WIYYMzM@cluster0.2sdkg1v.mongodb.net/contacts-backend?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });



const app = express();

app.use(express.json()); // allow to use json data

const port = process.env.PORT || 5000;



app.listen(port, () => {
    console.log('Server is running on port 5000');
})


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);


app.use((err, req, res, next) => {
  console.error(err); // Log the error details for your records
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';
  
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});


