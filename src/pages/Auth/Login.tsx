import LoginCompnent from "@/component/Auth/LoginCompnent";
import { PublicRoute } from "@/component/ProtectedRoute";

export default function Login() {
  return (
    <PublicRoute>
      <div className="container">
        <LoginCompnent/>
      </div>
    </PublicRoute>
  )
}