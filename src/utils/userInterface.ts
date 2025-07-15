export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImage: string | null;
}

export interface LoginInterface {
  email: string;
  password: string;
}