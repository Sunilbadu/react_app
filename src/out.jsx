const [city, setCity] = useState("");

<input
 value={city}
 onChange={(e) => setCity(e.target.value)}
/>

<h1>{city}</h1>