import { Table } from "antd";

import type { BaseTableColumnProps } from "../../shared";

const { Column } = Table;

const BaseTableColumn = (props: BaseTableColumnProps) => {
  const { title, dataIndex, key } = props;

  return <Column title={title} dataIndex={dataIndex} key={key}></Column>;
};

export default BaseTableColumn;
