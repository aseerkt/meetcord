import passport from 'passport';
import { CLIENT_URL } from '../config/constants';

const router = require('express').Router();

router.get('/github', passport.authenticate('github'));

router.get(
  '/github/callback',
  passport.authenticate('github', { successRedirect: `${CLIENT_URL}` }),
);

export default router;
