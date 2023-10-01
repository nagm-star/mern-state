import express from 'express';
import { connectDb } from './config/dbConnection.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// connectDb();

mongoose
  .connect(process.env.CONNECTION_STRING, {
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

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log('Server is running on port 5000');
})