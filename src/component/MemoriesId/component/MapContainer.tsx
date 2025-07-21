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
  lat: number | null;
  lon: number | null;
 }

export default function MapContain({ lat, lon }: MapProps) {

  const defaultLat = 9.0643305;
  const defaultLon = 7.4892974;

  const latitude = lat ?? defaultLat;
  const longitude = lon ?? defaultLon;

  const position: [number, number] = [latitude, longitude]

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