import Head from '@/layout/Head'
import AlbumContent from '../../component/CreateContent/AlbumContent'

export default function Album() {
  return (
    <div className='container'>
      <Head title="Create Memories or Travel Gallery - Document your travel experience"/>
      <AlbumContent/>
    </div>
  )
}