import GalleryComponent from "@/component/Gallery/GalleryComponent"
import Head from "@/layout/Head"

export default function Gallery() {
  return (
    <div className="container">
      <Head title="Your Collections of Travel Images - View Multiple Trave Images on Roamlog"/>
      <GalleryComponent/>
    </div>
  )
}