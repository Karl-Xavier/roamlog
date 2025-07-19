import { CheckCircle, Info, XCircle } from "phosphor-react";
import { useEffect } from "react";
import './css/toast.css'

type ToastProp = {
  message: string;
  type: string;
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProp) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="toast-container text-[#eee]" style={{ background: `${type === 'error' ? 'indianred' : type === 'success' ? '#4caf50' : 'lightslategrey'}` }}>
      <span className="toast">{message} {type === 'success' ? <CheckCircle size={22} weight='fill'/> : type === 'error' ? <XCircle size={22} weight='fill'/> : <Info size={22} weight='fill'/>}</span>
    </div>
  )
}