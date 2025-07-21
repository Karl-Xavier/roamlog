import ProfileComponent from '@/component/Profile/ProfileComponent'
import { ProtectedRoute } from '../component/ProtectedRoute'
import Head from '@/layout/Head'

export default function Profile() {
  return (
    <ProtectedRoute>
      <div className='container'>
        <Head title='Your Personal Information - Roamlog'/>
        <ProfileComponent/>
      </div>
    </ProtectedRoute>
  )
}