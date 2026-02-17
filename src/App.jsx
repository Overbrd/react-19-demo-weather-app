import { useState } from "react";
import CitySelector from "./components/CitySelector";
import WeatherCard from "./components/WeatherCard";
import "./styles.css";

export default function App() {
const [city, setCity] = useState("Miami");


  return (
    <main className="app">
      <h1>🌤️ Weather by City</h1>

      <CitySelector city={city} setCity={setCity} />

      <WeatherCard city={city} />
    </main>
  );
}
