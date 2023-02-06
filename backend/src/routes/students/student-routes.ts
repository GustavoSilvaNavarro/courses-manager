import { Router } from 'express';

import { createNewStudentData, getSingleStudentData } from '@/controllers/student-controllers';

const router = Router();

router.post('/new', createNewStudentData);
router.get('/:studentId', getSingleStudentData);

export default router;
