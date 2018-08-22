import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from "recompose";
import myMarkerSVG from './../../img/foot/map-location-pin-map-marker-glyph-512 copy 3.png';

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC-SuguM571luDYSIgnzGNBYS08-DGwbwo&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `650px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={14} defaultCenter={{ lat: 48.5257, lng: 25.0706 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 48.52515, lng: 25.0822 }} icon={{
        url: myMarkerSVG,
    }} />
    )}
  </GoogleMap>
));

export default MyMapComponent
