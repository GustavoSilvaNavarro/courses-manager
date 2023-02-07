export interface ICourse {
  id: number;
  courseName: string;
  description: string;
  teacher: string;
}

export interface IStudent {
  id: number;
  name: string;
  lastName: string;
  age: number;
  grade: string;
}

export interface ICourseDetails extends ICourse {
  students: Array<IStudent>;
}

export interface IServerError {
  error: {
    name: string;
    message: string;
    status: number;
    trace: string;
    code: number;
    error: boolean;
  };
}
