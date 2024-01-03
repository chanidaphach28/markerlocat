import style from "../Marker/mapmark.module.css"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"


import { MapContainer,TileLayer,Marker,Popup,Polyline,CircleMarker } from "react-leaflet"

const position = [13.729806, 100.778082];
export default function Home() {
    return(
     <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom = {true}> 
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
        
        <Marker position={position}>
            <Popup>
                KMITL
            </Popup>

        </Marker>
     </MapContainer>
    )
}