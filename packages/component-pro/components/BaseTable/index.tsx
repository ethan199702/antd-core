import { forwardRef, useImperativeHandle } from "react";

import { Table } from "antd";

import BaseTableColumn from "./components/BaseTableColumn";

import type { BaseTableProps } from "./shared";

const BaseTable = forwardRef((props: BaseTableProps, ref) => {
  const { columns, ...resProps } = props;

  useImperativeHandle(ref, () => ({}));

  return (
    <Table {...resProps}>
      {columns.map(column => (
        <BaseTableColumn key={column.key} {...column} />
      ))}
      BaseTable
    </Table>
  );
});

export default BaseTable;
