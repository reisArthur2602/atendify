import { api } from "../lib/Axios";
import {
  User,
  UserSignInRequest,
  UserSignInResponse,
  UserSignUpRequest,
} from "../types/User";

const userEndpoint = "/user";

const SignIn = async (data: UserSignInRequest) =>
  (await api.post<UserSignInResponse>(userEndpoint + "/session", data)).data;

const SignUp = async (data: UserSignUpRequest) =>
  await api.post(userEndpoint + "/register", data);

const Get = async () => (await api.get<User>(userEndpoint + "/me")).data;

export const UserServices = {
  SignIn,
  SignUp,
  Get,
};
