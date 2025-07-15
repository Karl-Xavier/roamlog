import { 
  MapContainer,
  TileLayer,
  Marker,
  Popup
 } from 'react-leaflet'
 import L from 'leaflet'
 import 'leaflet/dist/leaflet.css'

 // Fix Leaflet default icon path issues in vite/CRA

 delete(L.Icon.Default.prototype as any)._getIconUrl

 L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
 })
 
 type MapProps = {
  lat: number;
  lon: number;
 }

export default function MapContain({ lat, lon }: MapProps) {

  console.log(lat, lon)

  const position: [number, number] = [lat, lon]

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>Memory Location</Popup>
      </Marker>
    </MapContainer>
  )
}