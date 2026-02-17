import useWeather from "../hooks/useWeather";

export default function WeatherCard({ city }) {
  const { data, loading, error } = useWeather(city);

  if (loading) return <p>⏳ Loading weather...</p>;
  if (error) return <p>⚠️ Error fetching weather.</p>;

  const { temperature, windspeed, weathercode } = data;

  const icons = {
    0: "☀️",
    1: "🌤️",
    2: "⛅",
    3: "☁️",
    45: "🌫️",
    48: "🌫️",
    51: "🌦️",
    61: "🌧️",
    71: "❄️",
    95: "⛈️"
  };

  const icon = icons[weathercode] || "🌡️";

  return (
    <div className="weather-card">
      <h2>{icon} {city}</h2>
      <p>Temperature: {temperature}°F</p>
      <p>Wind Speed: {windspeed} mph</p>
    </div>
  );
}
