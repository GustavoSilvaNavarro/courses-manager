export interface IStudent {
  id?: number;
  name: string;
  lastName: string;
  age: number;
  gender: string;
  grade: string;
}

export interface INewStudent extends IStudent {
  courses: Array<{ courseId: number }>;
}

export interface ICourse {
  id?: number;
  courseName: string;
  description: string;
  teacher: string;
}

export interface IRelatives {
  id?: number;
  current_student: number;
}

export interface IStudentCourses {
  id?: number;
  courseId: number | undefined;
  studentId: number;
}
