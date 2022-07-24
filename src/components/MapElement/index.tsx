import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { GpsFixed } from '@styled-icons/material/GpsFixed';
import { GpsNotFixed } from '@styled-icons/material/GpsNotFixed';
import styled from 'styled-components';
import { LayoutRouteProps } from 'react-router-dom';
import { LatLngTuple, Map } from 'leaflet';

const MapStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #272; */
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -10;

  #map {
    width: 100vw;
    height: 100vh;
    position: relative;

    .leaflet {
      width: 100%;
      height: 100%;
    }
  }
`;

const GPSButton = styled.button`
  padding: 0.5em;
  position: absolute;
  bottom: 25vh;
  right: 2em;
  background: #fff;
  border: none;
  border-radius: 4em;
  cursor: pointer;
  z-index: 1000;
  outline: none;
`;

const GPS = styled(GpsNotFixed)`
  width: 3em;
`;

const MapElement = () => {
  const [map, setMap] = React.useState<Map | null>();
  const [position, setPosition] = React.useState([
    51.04, -114.08,
  ] as LatLngTuple);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
        map &&
          map.setView(
            [position.coords.latitude, position.coords.longitude],
            15
          );
      });
    }
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  return (
    <MapStyled>
      <div id="map">
        <MapContainer
          style={{ height: '100vh' }}
          center={position}
          zoom={14}
          scrollWheelZoom={false}
          zoomControl={false}
          ref={(map) => setMap(map)}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        <GPSButton onClick={getLocation}>
          <GPS />
        </GPSButton>
      </div>
    </MapStyled>
  );
};

export default MapElement;
