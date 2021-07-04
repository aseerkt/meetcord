import passport from 'passport';
import express from 'express';
import { CLIENT_URL } from '../config/constants';
import protect from '../middlewares/protect';

const router = express.Router();

router.get('/github', passport.authenticate('github'));

router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: CLIENT_URL,
  }),
  (_req, res) => {
    res.redirect(`${CLIENT_URL}`);
  },
);

router.get('/me', protect, (req, res) => {
  res.json(req.user);
});

router.get('/logout', (req, res) => {
  req.logOut();
  res.send({ message: 'Success' });
});

export default router;
