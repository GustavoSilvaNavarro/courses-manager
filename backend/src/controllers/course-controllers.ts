import { Request, Response, NextFunction } from 'express';

import { addCourse } from '@/models/daos/course-daos';

import { logger } from '@/utils/loggers';
import { AppErrors } from '@/helpers/app-error';
import { ICourse } from '@/types/app-types';

export const createNewCourse = async (req: Request<never, never, ICourse>, res: Response, next: NextFunction) => {
  try {
    const newCourse = await addCourse(req.body);
    return res.status(201).json(newCourse);
  } catch (err) {
    logger.error((err as AppErrors).message);
    next(err);
  }
};
