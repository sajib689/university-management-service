import { RequestHandler } from 'express';
import userService from './users.service';
const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    const result = await userService.createUser(user);
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result
    });
  } catch (err) {
    next(err);
  }
};

export default createUser;
