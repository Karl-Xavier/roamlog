import FormBox from "./component/Register/FormBox";
import './css/registercomponent.css'

export default function RegisterComponent() {
  return (
    <div className="container flex flex-col justify-center items-center h-screen px-[10px] md:px-0">
      <FormBox/>
    </div>
  )
}