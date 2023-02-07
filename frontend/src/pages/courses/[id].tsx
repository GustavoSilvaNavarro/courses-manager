import { GetServerSideProps } from 'next';

import { getCourseDetails } from '@/services/course-services';
import { ICourseDetails } from '@/types/app-types';

const SingleCourse = ({ course }: { course: ICourseDetails }) => {
  if (!course) {
    return (
      <section>
        <h2>There is no information to show</h2>
      </section>
    );
  }

  return (
    <section>
      <p>{course.courseName}</p>
    </section>
  );
};

export default SingleCourse;

export const getServerSideProps: GetServerSideProps = async context => {
  if (!context.params) {
    return {
      props: {
        course: null,
      },
    };
  }

  const id = context.params.id as string;
  const courseDetails = await getCourseDetails(id);

  return {
    props: {
      course: courseDetails,
    },
  };
};
