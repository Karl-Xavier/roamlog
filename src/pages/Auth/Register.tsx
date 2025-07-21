import RegisterComponent from "@/component/Auth/RegisterComponent";
import { PublicRoute } from "@/component/ProtectedRoute";

export default function Register() {
  return (
    <PublicRoute>
      <div className="container">
        <RegisterComponent/>
      </div>
    </PublicRoute>
  )
}