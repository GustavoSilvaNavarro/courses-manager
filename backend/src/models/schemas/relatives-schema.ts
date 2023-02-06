import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '@/models/connectionDb';
import { IRelatives } from '@/types/app-types';

export const RelativesSchema = sequelize.define<Model<IRelatives, Optional<IRelatives, 'id'>>>(
  'relatives',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    current_student: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
