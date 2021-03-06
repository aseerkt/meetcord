import { NextFunction, Request, Response } from 'express';

export default function protect(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (!req.user) {
    return res.status(401).json({ message: 'Not Authenticated' });
  }
  return next();
}
