import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/db';

connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));