export interface ICourse {
  id: number;
  courseName: string;
  description: string;
  teacher: string;
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
