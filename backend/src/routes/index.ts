import { Router } from 'express';

import courseRoutes from '@/routes/courses/course-routes';
import studentRoutes from '@/routes/students/student-routes';

const router = Router();

router.use('/courses', courseRoutes);
router.use('/students', studentRoutes);

export default router;
