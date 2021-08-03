import { FixedSizeGrid as Grid } from "react-window";
import * as faker from "faker";

const COLUMNS = 18;
const ROWS = 30;

const data = Array.from({ length: ROWS }, () =>
  Array.from({ length: COLUMNS }, faker.internet.avatar)
);

function App() {
  return (
    <Grid
      columnCount={COLUMNS}
      rowCount={ROWS}
      columnWidth={50}
      rowHeight={50}
      height={500}
      width={600}
    >
      {({ rowIndex, columnIndex, style }) => {
        return <img src={data\[rowIndex\][columnIndex]} alt="" />;
      }}
    </Grid>
  );
}
