import { api } from "../lib/Axios";
import {
  UserSignInRequest,
  UserSignInResponse,
  UserSignUpRequest,
} from "../types/User";
import { tokenUtils } from "../utils/token";

const userEndpoint = "/user";

const SignIn = async (data: UserSignInRequest) => {
  const response = await api.post<UserSignInResponse>(
    userEndpoint + "/session",
    data
  );
  const { token, user } = response.data;
  tokenUtils.save(token);
  console.log(`Olá ${user.username}, seja bem-vindo!`);
  return { user };
};
const SignUp = async (data: UserSignUpRequest) => {
  await api.post(userEndpoint + "/register", data);
  console.log(`A conta foi criada com sucesso, faça login!`);
};

export const UserServices = {
  SignIn,
  SignUp,
};
