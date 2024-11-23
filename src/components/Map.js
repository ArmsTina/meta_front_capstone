import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "300px",
};

const center = {
  lat: 37.484557,
  lng: -122.147845,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyClvOhdv2UNFu_WfsBydvG1xmlbl7PswRs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <MarkerF
          position={center}
          icon={
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          }
        ></MarkerF>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
