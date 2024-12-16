import express from 'express';
const router = express.Router();
import usersRoute from '../modules/users/users.route';
import semesterRoute from '../modules/academicSemester/academicSemester.route';

const moduleRoutes = [
  {
    path: '/users',
    route: usersRoute
  },
  {
    path: '/semesters',
    route: semesterRoute
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
