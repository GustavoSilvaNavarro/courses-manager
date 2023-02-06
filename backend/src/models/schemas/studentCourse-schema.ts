import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '@/models/connectionDb';
import { IStudentCourses } from '@/types/app-types';

export const StudentsCoursesSchema = sequelize.define<Model<IStudentCourses, Optional<IStudentCourses, 'id'>>>(
  'students_courses',
  {
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
