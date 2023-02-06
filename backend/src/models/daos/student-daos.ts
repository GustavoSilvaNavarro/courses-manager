import { StudentSchema } from '@/models/schemas/student-schema';
import { StudentsCoursesSchema } from '@/models/schemas/studentCourse-schema';
import { CourseSchema } from '@/models/schemas/course-schema';
import { INewStudent, IStudent } from '@/types/app-types';
import { checkData } from '@/helpers/helper-functions';
import { AppErrors, HttpStatusCode } from '@/helpers/app-error';

export const addNewStudent = async (payload: INewStudent) => {
  const { name, lastName, age, gender, grade } = payload;

  if (!checkData(name) || checkData(age) || !checkData(lastName) || !checkData(gender) || !checkData(grade)) {
    throw new AppErrors({
      message: 'Field are required and hold the right type',
      httpCode: HttpStatusCode.BAD_REQUEST,
      code: 3,
    });
  }

  if (!Array.isArray(payload.courses) || payload.courses.length < 1) {
    throw new AppErrors({
      message: 'Should register in at least one course',
      httpCode: HttpStatusCode.BAD_REQUEST,
      code: 3,
    });
  }

  const newStudent = (await StudentSchema.create({
    name,
    lastName,
    age,
    gender,
    grade,
  })) as unknown as Required<IStudent>;

  const result = payload.courses.map(el => ({ studentId: newStudent.id, courseId: el.courseId }));

  await StudentsCoursesSchema.bulkCreate(result);
  return newStudent;
};

export const getStudentInfo = async (studentId: string) => {
  const idStudent = Number(studentId);

  if (checkData(idStudent)) {
    throw new AppErrors({ message: 'Invalid ID', httpCode: HttpStatusCode.BAD_REQUEST, code: 3 });
  }

  const student = await StudentSchema.findOne({
    where: { id: idStudent },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: {
      model: CourseSchema,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      through: {
        attributes: [],
      },
    },
  });

  return student;
};
