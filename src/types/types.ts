interface Company {
    department: string;
    name: string;
    title: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  image: string;
  company : Company
}

interface GetStudentResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

interface StudentsRequestError {
    response : {
        data : {
            message: string
        }
    }
}

