import GalleryComponent from "@/component/Gallery/GalleryComponent"
import { ProtectedRoute } from "@/component/ProtectedRoute"
import Head from "@/layout/Head"

export default function Gallery() {
  return (
    <ProtectedRoute>
      <div className="container">
        <Head title="Your Collections of Travel Images - View Multiple Trave Images on Roamlog"/>
        <GalleryComponent/>
      </div>
    </ProtectedRoute>
  )
}