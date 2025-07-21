import Head from "@/layout/Head";
import MemoryContent from "../../component/CreateContent/MemoryContent";
import { ProtectedRoute } from "@/component/ProtectedRoute";

export default function Memory() {
  return (
    <ProtectedRoute>
      <div className="container">
        <Head title="Create Memories or Travel Gallery - Document your travel experience"/>
        <MemoryContent/>
      </div>
    </ProtectedRoute>
  )
}
