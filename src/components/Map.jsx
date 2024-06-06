import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Map() {
  const [libraries] = useState(["places"]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCYC3-gTg2XJFIeo9fura6PoNuQzzPeBlc",
    libraries,
  });
  const [selected, setSelected] = useState({ lat: "", lng: "" });
  const [pickAddress, setPickAddress] = useState("");

  const containerStyle = {
    width: "83%",
    height: "500px",
    margin: "0px auto",
  };

  const mapRef = useRef(null);
  const handleMapLoad = (map) => {
    mapRef.current = map;
  };

  const handleMapDrag = () => {
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      setSelected({ lat: center.lat(), lng: center.lng() });
    }
  };

  useEffect(() => {
    if (selected.lat !== "" && selected.lng !== "") {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: selected }, (results, status) => {
        if (status === "OK" && results[0]) {
          setPickAddress(results[0].formatted_address);
        }
      });
    }
  }, [selected]);
  return (
    <div className="">
      {isLoaded && (
        <GoogleMap
          zoom={pickAddress === "" ? 10 : 15}
          center={
            pickAddress === "" ? { lat: 34.0522, lng: -118.2437 } : selected
          }
          mapContainerStyle={containerStyle}
          draggable={true}
          onLoad={handleMapLoad} // Store the map instance when it loads
          onDragEnd={handleMapDrag}
          id="map"
        >
          <MarkerF
            position={
              pickAddress === "" ? { lat: 34.0522, lng: -118.2437 } : selected
            }
            setSelected={setSelected}
          />
        </GoogleMap>
      )}
    </div>
  );
}
