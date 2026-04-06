export interface CreateEmployeeDTO {
  fullName: string;
  jobTitle: string;
  country: string;
  salary: number;
}

export interface EmployeeResponse {
  id: number;
  fullName: string;
  jobTitle: string;
  country: string;
  salary: number;
  createdAt: Date;
}