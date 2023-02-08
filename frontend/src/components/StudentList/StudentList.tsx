import { IStudent } from '@/types/app-types';
import { env } from '@/helpers/env';

type Props = {
  student: IStudent;
};

export const StudentList = ({ student }: Props) => {
  return (
    <div className="studentCard__container">
      <div className="studentContainer__details">
        <img src={env.studentImage} alt={student.name} className="studentContainer__image" />
        <h2 className="text-lg font-semibold text-center">
          {student.name} {student.lastName}
        </h2>
        <div className="flex justify-between w-full px-2 mt-2">
          <p className="font-bold">Grade:</p>
          <p>{student.grade}</p>
        </div>
        <div className="flex justify-between w-full px-2 mt-2">
          <p className="font-bold">Age:</p>
          <p>{student.age}</p>
        </div>
      </div>
    </div>
  );
};
