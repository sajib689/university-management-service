import express from 'express';
const router = express.Router();
import usersRoute from '../modules/users/users.controller';
import semesterRoute from '../modules/academicSemester/academicSemester.route';

router.use('/users/', usersRoute);
router.use('/semesters/', semesterRoute);
export default router;
