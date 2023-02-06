import { Router } from 'express';

import { createNewStudentData } from '@/controllers/student-controllers';

const router = Router();

router.post('/new', createNewStudentData);

export default router;
