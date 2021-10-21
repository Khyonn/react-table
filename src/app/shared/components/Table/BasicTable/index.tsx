export interface TableProps<Item>
  extends React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  data: Item[];
  columnsNames?: string[];
  rowMapper?: (item: Item, index: number, table: Item[]) => React.ReactNode;
}

const defaultRowMapper = <Item extends unknown>(item: Item) => {
  console.warn("No row mapper for item", item);
  return <tr></tr>;
};

const BasicTable = <Item extends unknown>({
  data,
  rowMapper = defaultRowMapper,
  children,
  ...tableProps
}: TableProps<Item>) => {
  return (
    <table {...tableProps}>
      <thead>
        <tr></tr>
      </thead>
      <tbody>{data.map(rowMapper)}</tbody>
    </table>
  );
};

export default BasicTable;
