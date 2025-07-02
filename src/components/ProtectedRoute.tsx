import type { ReactNode } from "react";
import { useAuth } from "./AuthContext";
import ErrorPage from "./ErrorPage";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    // Not logged in - show error page
    return <ErrorPage />;
  }

  if (!allowedRoles.includes(user.role)) {
    // Logged in but not authorized - show error page
    return <ErrorPage />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 