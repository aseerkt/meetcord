import passport from 'passport';
import express from 'express';
import { CLIENT_URL } from '../config/constants';
import protect from '../middlewares/protect';

const router = express.Router();

router.get('/github', passport.authenticate('github'));

router.get(
  '/github/callback',
  passport.authenticate('github', { successRedirect: `${CLIENT_URL}` }),
);

router.get('/me', protect, (req, res) => {
  res.json(req.user);
});

export default router;
