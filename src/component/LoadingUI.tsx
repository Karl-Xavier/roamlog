import { ClipLoader } from "react-spinners";

export default function LoadingUI() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center font-bold">
      <ClipLoader color="#4c6f59" size={50}/>
      <p className="italic">Loading....</p>
    </div>
  )
}