import { forwardRef, useImperativeHandle, ReactElement } from "react";

import { Table } from "antd";
import BaseSearchForm from "./components/BaseSearchForm";
import { BaseTableAddOrEditDialog } from "./curd";

import type { BaseTableProps, AnyObject } from "./shared";

import style from "./index.module.less";

import { useFormatColumn } from "./hooks/useFormatColumn";

const BaseTable = <T extends AnyObject>(props: BaseTableProps<T>, ref: any) => {
  const {
    columns,
    dataSource,
    rowKey = "id",
    toolbar,
    CurdConfig,
    ...resProps
  } = props;

  useImperativeHandle(ref, () => ({}));

  const processedColumns = useFormatColumn(columns);
  return (
    <div className={style.base_table}>
      <BaseSearchForm<T> columns={columns} />
      <BaseTableAddOrEditDialog />
      <div className={style.base_table_toolbar}>
        <div className={style.base_table_toolbar_custom_button}>{toolbar}</div>
      </div>
      <Table
        rowKey={rowKey}
        dataSource={dataSource}
        columns={processedColumns}
        {...resProps}
      ></Table>
    </div>
  );
};

export default forwardRef(BaseTable) as <T extends AnyObject = AnyObject>(
  props: BaseTableProps<T> & { ref?: any }
) => ReactElement;
