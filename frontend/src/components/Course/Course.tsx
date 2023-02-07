import Link from 'next/link';

import { ICourse } from '@/types/app-types';

export const Course = ({ course }: { course: ICourse }): JSX.Element => {
  return (
    <div className="bg-shine-gray py-4 px-8 rounded-md max-w-[470px]">
      <h2 className="text-shine-green text-3xl text-center font-light pb-3">{course.courseName}</h2>
      <p className="text-md">{course.description}</p>
      <div className="flex items-center justify-between my-1">
        <h4 className="text-white font-semibold text-lg">Teacher:</h4>
        <h4 className="text-center text-[#0a0908] text-lg font-semibold mr-8">{course.teacher}</h4>
      </div>
      <div className="grid pt-4">
        <Link
          className="text-center bg-shine-green rounded-md py-2 text-white font-bold"
          href={`/courses/${course.id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};
