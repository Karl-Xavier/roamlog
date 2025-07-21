import { PublicRoute } from '@/component/ProtectedRoute'
import LandingContent from '../component/Landing/LandingContent'

export default function Landing() {
  return (
   <PublicRoute>
     <div className='container'>
      <LandingContent/>
    </div>
   </PublicRoute>
  )
}
