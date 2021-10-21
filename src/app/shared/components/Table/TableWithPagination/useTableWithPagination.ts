import { useCallback, useEffect, useMemo, useState } from "react";
import { toValueLabel } from "../utils";
import { ValueLabel } from ".";

function isValueLabelArray(
  array: number[] | ValueLabel[]
): array is ValueLabel[] {
  return !!(array.length && typeof array[0] !== "number");
}

const useTableWithPagination = <Item extends unknown>(
  data: Item[],
  defaultPageNumber: number,
  givenElementsPerPageOptions: number[] | ValueLabel[],
  givenElementsPerPage?: number
) => {
  const [pageNumber, setPageNumber] = useState(defaultPageNumber);
  const [elementsPerPage, setElementsPerPage] = useState(givenElementsPerPage);

  const paginatedData = useMemo(() => {
    if (typeof elementsPerPage !== "number") {
      return data;
    }
    return data.slice(
      elementsPerPage * (pageNumber - 1),
      elementsPerPage * pageNumber
    );
  }, [data, elementsPerPage, pageNumber]);

  const elementsPerPageOptions = useMemo(() => {
    if (isValueLabelArray(givenElementsPerPageOptions)) {
      return givenElementsPerPageOptions;
    }
    return givenElementsPerPageOptions.map(toValueLabel);
  }, [givenElementsPerPageOptions]);

  useEffect(() => {
    setPageNumber((currentPageNumber) => {
      return typeof elementsPerPage !== "number" ||
        data.length < elementsPerPage * currentPageNumber
        ? 1
        : currentPageNumber;
    });
  }, [data, elementsPerPage]);

  const handleElementsPerPageChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const {
        target: { value },
      } = event;
      setElementsPerPage(value === "" ? undefined : +value);
    },
    []
  );

  return {
    paginatedData,
    elementsPerPage,
    elementsPerPageOptions,
    handleElementsPerPageChange,
  };
};

export default useTableWithPagination;
