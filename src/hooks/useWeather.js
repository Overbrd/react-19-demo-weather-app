import { useEffect, useState } from "react";

export default function useWeather(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const cityCoords = {
    "New York": { lat: 40.7128, lon: -74.0060 },
    "Los Angeles": { lat: 34.0522, lon: -118.2437 },
    "Chicago": { lat: 41.8781, lon: -87.6298 },
    "Houston": { lat: 29.7604, lon: -95.3698 },
    "Phoenix": { lat: 33.4484, lon: -112.0740 },
    "Philadelphia": { lat: 39.9526, lon: -75.1652 },
    "San Antonio": { lat: 29.4241, lon: -98.4936 },
    "San Diego": { lat: 32.7157, lon: -117.1611 },
    "Dallas": { lat: 32.7767, lon: -96.7970 },
    "Jacksonville": { lat: 30.3322, lon: -81.6557 },
    "Austin": { lat: 30.2672, lon: -97.7431 },
    "Fort Worth": { lat: 32.7555, lon: -97.3308 },
    "San Jose": { lat: 37.3382, lon: -121.8863 },
    "Columbus": { lat: 39.9612, lon: -82.9988 },
    "Charlotte": { lat: 35.2271, lon: -80.8431 },
    "Indianapolis": { lat: 39.7684, lon: -86.1581 },
    "San Francisco": { lat: 37.7749, lon: -122.4194 },
    "Seattle": { lat: 47.6062, lon: -122.3321 },
    "Denver": { lat: 39.7392, lon: -104.9903 },
    "Oklahoma City": { lat: 35.4676, lon: -97.5164 },
    "Atlanta": { lat: 33.7490, lon: -84.3880 },
    "Chattanooga": { lat: 35.0456, lon: -85.3097 },
    "Knoxville": { lat: 35.9606, lon: -83.9207 },
    "Miami": { lat: 25.7617, lon: -80.1918 },
    "Kit Carson": { lat: 38.7639, lon: -102.7938 }
  };

  useEffect(() => {
    const { lat, lon } = cityCoords[city];

    async function fetchWeather() {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit`
        );

        const json = await res.json();

        setData({
          temperature: json.current_weather.temperature,
          windspeed: json.current_weather.windspeed,
          weathercode: json.current_weather.weathercode
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return { data, loading, error };
}
