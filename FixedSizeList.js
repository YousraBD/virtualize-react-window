import { FixedSizeList as List } from "react-window";

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
      <List
        innerElementType="ul"
        itemCount={data.length}
        itemSize={20}
        height={700}
        width={400}
      >
        {({ index, style }) => {
          return (
            <li style={style}>
              {data[index]}
            </li>
          );
        }}
      </List>
    </main>
  );
};
