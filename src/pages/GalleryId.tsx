import GalleryIdComponent from "@/component/Gallery/GalleryIdComponent";
import { ProtectedRoute } from "@/component/ProtectedRoute";

export default function GalleryId() {
  return (
    <ProtectedRoute>
      <div className="container">
        <GalleryIdComponent/>
      </div>
    </ProtectedRoute>
  )
}