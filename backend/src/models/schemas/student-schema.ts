import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '@/models/connectionDb';
import { RelativesSchema } from '@/models/schemas/relatives-schema';
import { IStudent } from '@/types/app-types';

export const StudentSchema = sequelize.define<Model<IStudent, Optional<IStudent, 'id'>>>('students', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      isInt: {
        msg: 'Field must be an integer',
      },
    },
  },
  grade: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
});

StudentSchema.hasMany(RelativesSchema, {
  foreignKey: 'sibling_id',
  sourceKey: 'id',
  onDelete: 'CASCADE',
});

RelativesSchema.belongsTo(StudentSchema, {
  foreignKey: 'sibling_id',
  targetKey: 'id',
});
