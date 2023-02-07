import { ICourse } from '@/types/app-types';

export const Course = ({ course }: { course: ICourse }): JSX.Element => {
  return (
    <div>
      <p>{course.courseName}</p>
    </div>
  );
};
