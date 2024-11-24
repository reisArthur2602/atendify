import { FormSignIn } from "../../components/Sign/FormSignIn";
import { useSignIn } from "../../hooks/useSignIn";

const Login = () => {
  const form = useSignIn();

  return (
    <>
      <FormSignIn {...form} />
    </>
  );
};

export default Login;
