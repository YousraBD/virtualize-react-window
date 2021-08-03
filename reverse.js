const App = () => {
  const [data, setData] = useState(() =>
    Array.from({ length: 10000 }, faker.address.city)
  );

  const reverse = () => {
    setData((data) => data.slice().reverse());
  };

  return (
    <main>
      <button onClick={reverse}>Reverse</button>
      <ul style={{ width: "400px", height: "700px", overflowY: "scroll" }}>
        {data.map((city, i) => (
          <li style={{ height: "20px" }} key={i + city}>{city}</li>
        ))}
      </ul>
    </main>
  );
};
