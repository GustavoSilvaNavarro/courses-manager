import { useState, useEffect } from 'react';

import { getListOfCourses } from '@/services/course-services';
import { CourseList } from '@/components/CourseList/CourseList';
import { ICourse } from '@/types/app-types';

export const MainPage = (): JSX.Element => {
  const [courses, setCourses] = useState<Array<ICourse>>([]);

  useEffect(() => {
    void getListOfCourses().then(data => {
      if (Array.isArray(data)) {
        setCourses(data);
        return;
      }

      //TODO: In case of an error print a loader
    });
  }, []);

  if (courses.length < 1) {
    return (
      <section>
        <h1>There is no courses to show</h1>
      </section>
    );
  }

  return (
    <>
      <CourseList coursesList={courses} />
    </>
  );
};
