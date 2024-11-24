export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
};

export type UserSignInRequest = {
  email: string;
  password: string;
};

export type UserSignInResponse = {
  user: User;
  token: string;
};

export type UserSignUpRequest = {
  username: string;
  email: string;
  password: string;
};
