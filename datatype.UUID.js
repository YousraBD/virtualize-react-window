<List
  itemKey={faker.datatype.uuid}
  itemData={data}
  innerElementType="ul"
  itemCount={data.length}
  itemSize={20}
  height={700}
  width={400}
>
  {({ data, index, style }) => {
    return <li style={style}>{data[index]}</li>;
  }}
</List>
