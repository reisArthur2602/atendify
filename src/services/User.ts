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

    // salva token no local storage
    tokenUtils.save(token);

    console.log(`Olá ${user.username}, seja bem-vindo!`);
    
  } catch (error) {
    const message = error as string;
    console.error(message);
  }
};

export const UserServices = {
  SignIn,
};
