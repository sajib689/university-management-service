import express from 'express';
import userController from './users.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  userController
);

export default router;
