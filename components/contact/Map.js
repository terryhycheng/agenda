import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import MapStyle from "./MapStyle";

const key = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY;

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 22.282019177672204,
  lng: 114.15445384867213,
};

const Map = () => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <LoadScript googleMapsApiKey={key}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={19}
          options={{
            styles: MapStyle,
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={center} title="Agenda Consulting Asia" />
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
