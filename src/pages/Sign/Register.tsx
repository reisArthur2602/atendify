import { FormSignUp } from "../../components/Sign/FormSignUp";
import { useSignUp } from "../../hooks/Sign/useSignUp";

const Register = () => {
  const form = useSignUp();
  return (
    <>
      <FormSignUp {...form} />
    </>
  );
};

export default Register;
