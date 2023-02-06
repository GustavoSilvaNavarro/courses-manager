import { Request, Response, NextFunction } from 'express';

import { addNewStudent, getStudentInfo } from '@/models/daos/student-daos';
import { logger } from '@/utils/loggers';
import { AppErrors } from '@/helpers/app-error';
import { INewStudent } from '@/types/app-types';
import { Params } from '@/types/route-types';

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

export const getSingleStudentData = async (
  req: Request<Pick<Params, 'studentId'>>,
  res: Response,
  next: NextFunction
) => {
  try {
    const studentInfo = await getStudentInfo(req.params.studentId);
    return res.status(200).json(studentInfo);
  } catch (err) {
    logger.error((err as AppErrors).message);
    next(err);
  }
};
