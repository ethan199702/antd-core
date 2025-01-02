import { useEffect, useState } from "react";

import type { BaseTableColumnProps } from "../shared";

export const useCurdConfig = (columns: BaseTableColumnProps[]) => {
  const [fields, setFields] = useState<any[]>([]);

  useEffect(() => {
    setFields(() => {
      return columns
        .filter(column => !column.hideInSearchForm)
        .map(column => ({
          name: column.dataIndex,
          label: column.title,
          valueType: column.valueType || "text"
        }));
    });
  }, [columns]);

  return fields;
};
