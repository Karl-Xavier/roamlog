import Head from "@/layout/Head";
import CreateContent from "../../component/CreateContent/CreateContent";
import { ProtectedRoute } from "@/component/ProtectedRoute";

export default function Create() {
  return (
   <ProtectedRoute>
     <div className="container w-full">
        <Head title="Create Memories or Travel Gallery - Document your travel experience"/>
        <CreateContent/>
      </div>
   </ProtectedRoute>
  )
}
