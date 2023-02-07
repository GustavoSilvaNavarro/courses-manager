import { Course } from '@/components/Course/Course';
import { ICourse } from '@/types/app-types';

interface IProps {
  coursesList: Array<ICourse>;
}

export const CourseList = ({ coursesList }: IProps): JSX.Element => {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {coursesList.map(course => (
        <Course course={course} key={course.id} />
      ))}
    </div>
  );
};
