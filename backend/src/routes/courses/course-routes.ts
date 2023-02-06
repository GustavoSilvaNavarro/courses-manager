import { Router } from 'express';

import { createNewCourse, retrieveSingleCourseData } from '@/controllers/course-controllers';

const router = Router();

router.post('/new', createNewCourse);
router.get('/:courseId', retrieveSingleCourseData);

export default router;
