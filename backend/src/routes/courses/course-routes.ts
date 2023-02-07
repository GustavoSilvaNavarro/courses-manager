import { Router } from 'express';

import { createNewCourse, retrieveSingleCourseData, getListOfCourses } from '@/controllers/course-controllers';

const router = Router();

router.post('/new', createNewCourse);
router.get('/:courseId', retrieveSingleCourseData);
router.get('/', getListOfCourses);

export default router;
