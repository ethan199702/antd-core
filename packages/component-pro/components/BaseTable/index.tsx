import { forwardRef, useImperativeHandle, ReactElement } from "react";

import { Table } from "antd";
import BaseSearchForm from "./components/BaseSearchForm";
import { BaseTableAddOrEditDialog } from "./curd";

import type { BaseTableProps, AnyObject } from "./shared";

import style from "./index.module.less";

import { useFormatColumn } from "./hooks/useFormatColumn";
import { useBaseTableCurd } from "./hooks/useBaseTableCurd";

const BaseTable = <T extends AnyObject>(props: BaseTableProps<T>, ref: any) => {
  const {
    columns,
    dataSource,
    rowKey = "id",
    toolbar,
    CurdConfig = {},
    ...resProps
  } = props;

  const processedColumns = useFormatColumn(columns);
  const { doAddOrEdit } = useBaseTableCurd(CurdConfig);
  useImperativeHandle(ref, () => ({ doAddOrEdit }));

  return (
    <div className={style.base_table}>
      <BaseSearchForm<T> columns={columns} />
      <BaseTableAddOrEditDialog<T> colunms={columns} />
      <div className={style.base_table_toolbar}>
        <div className={style.base_table_toolbar_custom_button}>
          {typeof toolbar === "function" ? toolbar({ doAddOrEdit }) : toolbar}
        </div>
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
