export interface User {
  email: string;
  password: string;
  username: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface TabItem {
  id: number;
  title: string;
}

export type ButtonType = 'button' | 'submit' | 'reset';
