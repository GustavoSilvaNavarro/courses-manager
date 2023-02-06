import { CourseSchema } from '@/models/schemas/course-schema';
import { ICourse } from '@/types/app-types';
import { AppErrors, HttpStatusCode } from '@/helpers/app-error';
import { checkData } from '@/helpers/helper-functions';

export const addCourse = async (payload: ICourse) => {
  const { courseName, description, teacher } = payload;

  if (!checkData(courseName) || !checkData(description) || !checkData(teacher)) {
    throw new AppErrors({ message: 'Fields are required', httpCode: HttpStatusCode.BAD_REQUEST, code: 3 });
  }

  return await CourseSchema.create(payload);
};
