import { useRef, useEffect } from 'react';
import * as S from './contacts-map.styled';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Zoom from 'ol/control/Zoom';
import Overlay from 'ol/Overlay';
import {fromLonLat} from 'ol/proj';
import { Coordinates } from 'const';
import {ReactComponent as IconLocation} from 'assets/img/popup.svg'

const ContactsMap = () => {
  const mapRef = useRef();
  const popupRef = useRef();

  useEffect(() => {
    new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([Coordinates.CITY.LNG,Coordinates.CITY.LAT]),
        zoom: Coordinates.CITY.ZOOM
      }),
      controls: [new Zoom()],
      overlays: [new Overlay({
        element: popupRef.current,
        position: fromLonLat([Coordinates.POINT.LNG,Coordinates.POINT.LAT]),
        positioning: 'bottom-center'
      })]
    });
  }, [])

  return (
    <S.ContactsMap ref={mapRef}>
      <IconLocation ref={popupRef}></IconLocation>
    </S.ContactsMap>
  );
};

export default ContactsMap;
