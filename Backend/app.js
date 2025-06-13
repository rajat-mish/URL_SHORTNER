import express from 'express';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';
import connectDB from './src/config/mongo.config.js';
import auth_routes from './src/routes/auth.routes.js';

import shortUrl from './src/routes/shortUrl.route.js';
import { redirectFromShortUrl } from './src/controller/shortUrl.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import cors from 'cors';
import { attachUser } from './src/utils/attachUser.js';
import cookieParser from 'cookie-parser';
import user_routes from './src/routes/user.route.js';

dotenv.config({ path: './.env' });


const app = express();
app.use(cors({
    origin: 'https://url-shortner-virid-tau.vercel.app/',
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(attachUser);
app.use('/api/user',user_routes);
app.use('/api/auth',auth_routes);
app.use('/api/create',shortUrl);
app.use(errorHandler);


app.get('/:shortUrl', redirectFromShortUrl);



app.listen(3000, () => {
    connectDB()
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
    console.log('Server is running on port 3000');
});