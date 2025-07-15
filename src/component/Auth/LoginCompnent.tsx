import FormBox from "./component/Login/FormBox";
import './css/logincomponent.css'

export default function LoginCompnent() {
  return (
    <div className="container flex flex-col justify-center items-center h-screen px-[10px] md:px-0">
      <FormBox/>
    </div>
  )
}