import express from 'express';
import { AuthControllers } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { authValidation } from './auth.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/login',
  validateRequest(authValidation.loginUser),
  AuthControllers.loginUser,
);

router.post('/logout', auth, AuthControllers.logoutUser);

router.post(
  '/refresh-token',
  validateRequest(authValidation.refreshToken),
  AuthControllers.refreshAccessToken,
);

export const AuthRoutes = router;
