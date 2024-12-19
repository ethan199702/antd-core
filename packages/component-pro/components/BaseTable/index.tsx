import { forwardRef, useImperativeHandle } from "react";

import { Table } from "antd";

import BaseTableColumn from "./components/BaseTableColumn";
import BaseSearchForm from "./components/BaseSearchForm";

import type { BaseTableProps } from "./shared";

const BaseTable = forwardRef((props: BaseTableProps, ref) => {
  const { columns, ...resProps } = props;

  useImperativeHandle(ref, () => ({}));

  return (
    <div>
      <BaseSearchForm columns={columns} />
      <Table {...resProps}>
        {columns.map(column => (
          <BaseTableColumn key={column.key} {...column} />
        ))}
      </Table>
    </div>
  );
});

export default BaseTable;
