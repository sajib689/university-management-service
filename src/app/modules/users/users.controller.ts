import { RequestHandler } from 'express';
import userService from './users.service';
import { z } from 'zod';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const createUserZodSchema = z.object({
      body: z.object({
        role: z.string({
          required_error: `Role is required`
        }),
        password: z.string().optional()
      })
    });
    await createUserZodSchema.parseAsync(req);
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
