import { Router } from 'express';

import { createNewCourse } from '@/controllers/course-controllers';

const router = Router();

router.post('/new', createNewCourse);

export default router;
