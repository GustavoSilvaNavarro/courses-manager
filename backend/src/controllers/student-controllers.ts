import { Request, Response, NextFunction } from 'express';

import { logger } from '@/utils/loggers';
import { addNewStudent } from '@/models/daos/student-daos';
import { AppErrors } from '@/helpers/app-error';
import { INewStudent } from '@/types/app-types';

export const createNewStudentData = async (
  req: Request<never, never, INewStudent>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newStudent = await addNewStudent(req.body);
    return res.status(201).json(newStudent);
  } catch (err) {
    logger.error((err as AppErrors).message);
    next(err);
  }
};
