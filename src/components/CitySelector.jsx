export default function CitySelector({ city, setCity }) {
  const cities = [
    "Atlanta",
    "Austin",
    "Charlotte",
    "Chattanooga",
    "Chicago",
    "Columbus",
    "Dallas",
    "Denver",
    "Fort Worth",
    "Houston",
    "Indianapolis",
    "Jacksonville",
    "Kit Carson",
    "Knoxville",
    "Los Angeles",
    "Miami",
    "New York",
    "Oklahoma City",
    "Philadelphia",
    "Phoenix",
    "San Antonio",
    "San Diego",
    "San Francisco",
    "San Jose",
    "Seattle"
  ];

  return (
    <div className="city-selector">
      <label>Select a City:</label>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
