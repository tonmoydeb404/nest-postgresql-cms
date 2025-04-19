import { CookieOptions } from 'express';

export default (): CookieOptions => ({
  httpOnly: true, // Prevents client-side JavaScript access
  signed: true, // Signs the cookie
  secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
  sameSite: 'strict', // Prevents CSRF attacks
});
