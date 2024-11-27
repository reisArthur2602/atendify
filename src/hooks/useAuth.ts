import { useNavigate } from "react-router-dom";
import { UserStore } from "../providers/stores/UserStores";
import { UserServices } from "../services/User";
import { UserSignInRequest } from "../types/User";
import { tokenUtils } from "../utils/token";
import { useState } from "react";
import { api } from "../lib/Axios";

export const useAuth = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const { currentUser, updateUser } = UserStore();

  const handleInitAuthUser = async () => {
    const access_token = tokenUtils.get();
    if (!access_token) return setLoading(false);

    api.defaults.headers["Authorization"] = `Bearer ${tokenUtils.get()}`;

    await UserServices.Get()
      .then((user) => {
        updateUser(user);
        navigate("/dashboard", { replace: true });
      })
      .catch(() => navigate("/sign", { replace: true }))
      .finally(() => setLoading(false));
  };

  const handleSignIn = async (data: UserSignInRequest) =>
    await UserServices.SignIn(data)
      .then(({ user }) => {
        updateUser(user);
        console.log(`Olá ${user.username}, faça login!`);
        navigate("/dashboard", { replace: true });
      })
      .catch(() =>
        console.error("Acesso negado, verifique os dados e tente novamente")
      );

  return {
    isLogged: !!currentUser,
    handleInitAuthUser,
    handleSignIn,
    loading,
  };
};
