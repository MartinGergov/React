import { useEffect, useState } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function getCurrentLocation() {
    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        setError(error.message);
      }
    );
  }
  useEffect(() => getCurrentLocation(), []);

  return {
    location,
    loading,
    error,
    getCurrentLocation,
  };
}
