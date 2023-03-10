import { api } from '@/services/api';
import { env } from '@/helpers/env';
import { ICourse, ICourseDetails } from '@/types/app-types';

export const getListOfCourses = async () => {
  try {
    const result = await api.get('/courses', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': env.baseUrl ? env.baseUrl : '*',
      },
    });

    const courseList = result.data as unknown as Array<ICourse>;
    return courseList;
  } catch (err) {
    console.error(err);
  }
};

export const getCourseDetails = async (id: string) => {
  try {
    const result = await api.get(`/courses/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': env.baseUrl ? env.baseUrl : '*',
      },
    });

    const courseDetails = result.data as unknown as ICourseDetails;
    return courseDetails;
  } catch (err) {
    console.error(err);
  }
};
