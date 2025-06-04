import express from 'express';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';
import connectDB from './src/config/mongo.config.js';

import shortUrl from './src/routes/shortUrl.route.js';
import { redirectFromShortUrl } from './src/controller/shortUrl.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import cors from 'cors';

dotenv.config('./.env');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/create',shortUrl);
app.use(errorHandler);


app.get('/:shortUrl', redirectFromShortUrl);



app.listen(3000, () => {
    connectDB()
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
    console.log('Server is running on port 3000');
});