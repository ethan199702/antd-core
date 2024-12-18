import { forwardRef } from "react";
import { Table } from "antd";

import type { BaseTableColumnProps } from "../shared";

const { Column } = Table;

const BaseTableColumn = forwardRef((props: BaseTableColumnProps) => {
  const { title, dataIndex, key, ...restProps } = props;
  return <Column title={title} dataIndex={dataIndex}></Column>;
});

export default BaseTableColumn;
