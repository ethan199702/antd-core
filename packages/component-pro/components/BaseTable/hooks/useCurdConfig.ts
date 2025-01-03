import { useEffect, useState } from "react";

import type { BaseTableColumnProps } from "../shared";

export const useCurdConfig = (columns: BaseTableColumnProps[]) => {
  const [fields, setFields] = useState<any[]>([]);
  const WHITE_COLUMN_TYPES = ["selection", "index", "expand", "operation"];

  useEffect(() => {
    setFields(() => {
      return columns
        .filter(column => {
          return (
            !column.hideInAddOrEditForm &&
            !WHITE_COLUMN_TYPES.includes(column?.type || "")
          );
        })
        .map(column => ({
          name: column.dataIndex,
          label: column.title,
          valueType: column.valueType || "text"
        }));
    });
  }, [columns]);

  return fields;
};
