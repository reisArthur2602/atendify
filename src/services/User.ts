import { api } from "../lib/Axios";
import {
  User,
  UserSignInRequest,
  UserSignInResponse,
  UserSignUpRequest,
} from "../types/User";

const userEndpoint = "/user";

const SignIn = async (data: UserSignInRequest) => {
  const session = (
    await api.post<UserSignInResponse>(userEndpoint + "/session", data)
  ).data;
  return session;
};

const SignUp = async (data: UserSignUpRequest) => {
  await api.post(userEndpoint + "/register", data);
};

const Get = async () => {
  const user = (await api.get<User>(userEndpoint + "/me")).data;
  return user;
};

export const UserServices = {
  SignIn,
  SignUp,
  Get,
};
