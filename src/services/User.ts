import { api } from "../lib/Axios";
import { UserSignInRequest, UserSignInResponse } from "../types/User";
import { tokenUtils } from "../utils/token";

const userEndpoint = "/user";

const SignIn = async (data: UserSignInRequest) => {
  try {
    const response = await api.post<UserSignInResponse>(
      userEndpoint + "/session",
      data
    );
    const { token, user } = response.data;
    tokenUtils.save(token);
    console.log(`Olá ${user.username}, seja bem-vindo!`);
    return { user };
  } catch (error) {
    console.error(error as string);
  }
};

export const UserServices = {
  SignIn,
};
