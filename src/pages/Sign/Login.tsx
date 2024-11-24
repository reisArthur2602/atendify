import { FormSignIn } from "../../components/Sign/FormSignIn";
import { useSignIn } from "../../hooks/Sign/useSignIn";

const Login = () => {
  const form = useSignIn();

  return (
    <>
      <FormSignIn {...form} />
    </>
  );
};

export default Login;
