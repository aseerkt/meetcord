import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { IS_PROD } from './config/constants';
import passport from 'passport';
import configPassport from './config/passport';

// Importing routes
import authRoutes from './routes/auth';

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('trust proxy', 1);
app.use(
  session({
    name: 'meetcord-session',
    secret: process.env.COOKIE_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: IS_PROD ? 'none' : 'lax',
      httpOnly: true,
      secure: !IS_PROD,
    },
  }),
);

// Passport setup

configPassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// Routes

app.use('/auth', authRoutes);

export default app;
