import { useCurrentLocation } from "./useCurrentLocation";

export function CurrentLocation() {
  const { location, loading, error, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      <h3>Your current location is: </h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
      <button onClick={getCurrentLocation}>Get your current location</button>
    </div>
  );
}
