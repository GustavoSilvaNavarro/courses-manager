import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '@/models/connectionDb';
import { ICourse } from '@/types/app-types';
import { StudentSchema } from '@/models/schemas/student-schema';
import { StudentsCoursesSchema } from '@/models/schemas/studentCourse-schema';

export const CourseSchema = sequelize.define<Model<ICourse, Optional<ICourse, 'id'>>>('courses', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  courseName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: '',
  },
  teacher: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
});

CourseSchema.belongsToMany(StudentSchema, {
  through: StudentsCoursesSchema,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

StudentSchema.belongsToMany(CourseSchema, {
  through: StudentsCoursesSchema,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
