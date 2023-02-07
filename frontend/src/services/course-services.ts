import { api } from '@/services/api';
import { env } from '@/helpers/env';
import { ICourse } from '@/types/app-types';

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
