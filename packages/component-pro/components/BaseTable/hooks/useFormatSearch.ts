import { useEffect, useState } from "react";
import type { BaseTableColumnProps } from "../shared";

export const useFormatSearch = (columns: BaseTableColumnProps[]) => {
  const WHITE_COLUMN_TYPES = ["selection", "index", "expand", "operation"];

  const [fields, setFields] = useState<any[]>([]);

  useEffect(() => {
    setFields(() => {
      return columns
        .filter(
          column =>
            !column.hideInSearchForm &&
            !WHITE_COLUMN_TYPES.includes(column?.type || "")
        )
        .map(column => ({
          name: column.dataIndex,
          label: column.title,
          valueType: column.valueType || "text",
          attrs: {
            placeholder: `请输入${column.title}`
          }
        }));
    });
  }, [columns]);

  return fields;
};
