import { Course } from '@/components/Course/Course';
import { ICourse } from '@/types/app-types';

interface IProps {
  coursesList: Array<ICourse>;
}

export const CourseList = ({ coursesList }: IProps): JSX.Element => {
  return (
    <>
      {coursesList.map(course => (
        <Course course={course} key={course.id} />
      ))}
    </>
  );
};
