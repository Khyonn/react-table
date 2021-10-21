import Table, { TableProps } from "../BasicTable";
import useTableWithPagination from "./useTableWithPagination";

export type ValueLabel = { label: string; value: number };

interface TableWithPaginationProps<Item> extends TableProps<Item> {
  as?: React.ComponentType<TableProps<Item>>;
  elementsPerPage?: number;
  defaultPageNumber?: number;
  elementsPerPageOptions?: number[] | ValueLabel[];
}

const defaultElementsPerPageOptions = [5, 10, 15];

const TableWithPagination = <Item extends unknown>({
  as: CustomTable = Table,
  defaultPageNumber = 1,
  elementsPerPage: givenElementsPerPage,
  elementsPerPageOptions:
    givenElementsPerPageOptions = defaultElementsPerPageOptions,
  data,
  ...tableProps
}: TableWithPaginationProps<Item>) => {
  const {
    paginatedData,
    elementsPerPage,
    elementsPerPageOptions,
    handleElementsPerPageChange,
  } = useTableWithPagination(
    data,
    defaultPageNumber,
    givenElementsPerPageOptions,
    givenElementsPerPage
  );

  return (
    <>
      <CustomTable {...tableProps} data={paginatedData} />
      <button>Debut</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>Fin</button>
      <select
        onChange={handleElementsPerPageChange}
        value={elementsPerPage ?? ""}
      >
        {elementsPerPageOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
        <option value="">All</option>
      </select>
    </>
  );
};

export default TableWithPagination;
