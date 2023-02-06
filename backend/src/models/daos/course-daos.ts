import { CourseSchema } from '@/models/schemas/course-schema';
import { StudentSchema } from '../schemas/student-schema';
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

export const getSingleCourse = async (courseId: string) => {
  const idCourse = Number(courseId);

  if (checkData(idCourse)) {
    throw new AppErrors({ message: 'Invalid ID', httpCode: HttpStatusCode.BAD_REQUEST, code: 3 });
  }

  const course = await CourseSchema.findOne({
    where: { id: idCourse },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: {
      model: StudentSchema,
      attributes: { exclude: ['createdAt', 'updatedAt', 'gender'] },
      through: {
        attributes: [],
      },
    },
  });

  return course;
};
