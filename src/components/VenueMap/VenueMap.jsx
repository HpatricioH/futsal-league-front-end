import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import './VenueMap.scss';
import iconForLocation from '../../assets/icons/location_on.svg';

const VenueMap = ({ games }) => {
  // icon style function
  const markerStyle = icon({
    iconUrl: iconForLocation,
    iconSize: [35, 85],
    iconAnchor: [25, 58],
  });

  return (
    <div id="map">
      <h2 className="font-bold text-xl py-4">
        {games.team_one} vs {games.team_two}
      </h2>
      <MapContainer
        center={[43.46035198614338, -80.51951432015905]}
        zoom={12}
        className="simpleMap"
      >
        <TileLayer
          attribution='&copy <a href="https://osm.org/copyright">OpenStreetMap</a> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[games.latitude, games.longitude]} icon={markerStyle}>
          <Popup>
            <div className="text-xs text-center font-semibold">
              <p>{games.address}</p>
              <p>{games.date}</p>
              <p>{games.time}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default VenueMap;
