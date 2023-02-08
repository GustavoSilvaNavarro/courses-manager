import { ICourseDetails } from '@/types/app-types';
import { StudentList } from '@/components/StudentList/StudentList';
import { env } from '@/helpers/env';

type Props = {
  course: ICourseDetails;
};

export const CourseDetails = ({ course }: Props) => {
  return (
    <>
      <div className="singeSchool__banner" style={{ backgroundImage: `url(${env.schoolImage})` }}>
        <div className="courseDetails__overlay flex items-center">
          <h2 className="text-6xl ml-4 text-shine-green">{course.courseName}</h2>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-5xl font-light py-2 px-4">Details</h3>
        <div className="bg-[#222222] p-3 rounded-md mt-5">
          <p className="text-lg font-light">{course.description}</p>
          <p className="text-end text-shine-green font-semibold text-2xl mr-6 mt-6">{course.teacher}</p>
        </div>
        <h3 className="text-5xl font-light py-2 px-4 mt-3">Students</h3>
        <div className="flex justify-center gap-8 flex-wrap mb-6">
          {course.students.length > 0 ? (
            course.students.map(student => <StudentList student={student} key={student.id} />)
          ) : (
            <div>
              <p>No Students enrolled in this course</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
