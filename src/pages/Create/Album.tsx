import Head from '@/layout/Head'
import AlbumContent from '../../component/CreateContent/AlbumContent'
import { ProtectedRoute } from '@/component/ProtectedRoute'

export default function Album() {
  return (
    <ProtectedRoute>
      <div className='container'>
        <Head title="Create Memories or Travel Gallery - Document your travel experience"/>
        <AlbumContent/>
      </div>
    </ProtectedRoute>
  )
}