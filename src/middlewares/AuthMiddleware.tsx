import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ReactNode } from "react";

type AuthMiddlewareProps = {
  children: ReactNode;
};

export const AuthMiddleware = ({ children }: AuthMiddlewareProps) => {
  const { isLogged } = useAuth();

  if (!isLogged) return <Navigate to="/sign" replace />;

  return <>{children}</>;
};
