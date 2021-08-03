import React, { useState } from "react";
import * as faker from "faker";

const App = () => {
  const [data, setData] = useState(() =>
    Array.from({ length: 10000 }, faker.address.city)
  );

  return (
    <main>
      <ul style={{ width: "400px", height: "700px", overflowY: "scroll" }}>
        {data.map((city, i) => (
          <li key={i + city}>{city}</li>
        ))}
      </ul>
    </main>
  );
};
