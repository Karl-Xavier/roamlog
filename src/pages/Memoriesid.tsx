import { ProtectedRoute } from "@/component/ProtectedRoute";
import MemoriesIdComponent from "../component/MemoriesId/MemoriesIdComponent";

export default function MemoriesId() {
  return (
    <ProtectedRoute>
      <div className="container">
        <MemoriesIdComponent/>
      </div>
    </ProtectedRoute>
  )
}