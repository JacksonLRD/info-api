export interface UserDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UpdateUserDTO {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}
