import { forwardRef, useImperativeHandle } from "react";

import { Table } from "antd";

import BaseSearchForm from "./components/BaseSearchForm";

import type { BaseTableProps } from "./shared";

const BaseTable = forwardRef((props: BaseTableProps, ref) => {
  const { columns, dataSource, rowKey = "id", ...resProps } = props;

  useImperativeHandle(ref, () => ({}));
  const processedColumns = columns.map(column => ({
    ...column,
    key: column.dataIndex
  }));

  return (
    <div>
      <BaseSearchForm columns={columns} />
      <Table
        rowKey={rowKey}
        dataSource={dataSource}
        columns={processedColumns}
        {...resProps}
      ></Table>
    </div>
  );
});

export default BaseTable;
