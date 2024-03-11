import { Navigate, Outlet } from "react-router-dom";
import Cookie from "cookie-universal";

export default function RequireAuth() {
  // Handle Cookies
  const cookies = Cookie();
  const token = cookies.get("edu-caring");
  const roles = cookies.get("roles");
  const userId = cookies.get("userId");

  // Edditting in the token prevent it
  return token && roles.includes("User" || "Speaker") && userId ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} />
  );
}
