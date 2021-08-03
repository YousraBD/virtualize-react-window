<List
  useIsScrolling={true}
  itemCount={data.length}
  itemSize={20}
  height={700}
  width={400}
>
  {({ index, style, isScrolling }) =>
    isScrolling ? (
      <Skeleton style={style} />
    ) : (
      <ExpensiveItem index={index} style={style} />
    )
  }
</List>;
