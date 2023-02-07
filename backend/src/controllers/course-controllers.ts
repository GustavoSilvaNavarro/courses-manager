import { Request, Response, NextFunction } from 'express';

import { addCourse, getSingleCourse, getAllCourses } from '@/models/daos/course-daos';

import { logger } from '@/utils/loggers';
import { AppErrors } from '@/helpers/app-error';
import { ICourse } from '@/types/app-types';
import { Params } from '@/types/route-types';

export const createNewCourse = async (req: Request<never, never, ICourse>, res: Response, next: NextFunction) => {
  try {
    const newCourse = await addCourse(req.body);
    return res.status(201).json(newCourse);
  } catch (err) {
    logger.error((err as AppErrors).message);
    next(err);
  }
};

export const retrieveSingleCourseData = async (
  req: Request<Pick<Params, 'courseId'>>,
  res: Response,
  next: NextFunction
) => {
  try {
    const course = await getSingleCourse(req.params.courseId);
    return res.status(200).json(course);
  } catch (err) {
    logger.error((err as AppErrors).message);
    next(err);
  }
};

export const getListOfCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const courseList = await getAllCourses();
    return res.status(200).json(courseList);
  } catch (err) {
    logger.error((err as AppErrors).message);
    next(err);
  }
};
