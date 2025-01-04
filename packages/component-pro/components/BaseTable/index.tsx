import {
  forwardRef,
  useImperativeHandle,
  ReactElement,
  useRef,
  useEffect
} from "react";

import { Table } from "antd";
import BaseSearchForm from "./components/BaseSearchForm";
import { BaseTableAddOrEditDialog } from "./curd";

import style from "./index.module.less";

import { useFormatColumn } from "./hooks/useFormatColumn";
import { useBaseTableCurd } from "./hooks/useBaseTableCurd";
import type { BaseTableProps, AnyObject } from "./shared";
import type { BaseTableAddOrEditRef } from "./curd/BaseTableAddOrEditDialog/shared";

const BaseTable = <T extends AnyObject>(props: BaseTableProps<T>, ref: any) => {
  const {
    columns,
    dataSource,
    rowKey = "id",
    toolbar,
    CurdConfig = {},
    ...resProps
  } = props;
  const addOrEditRef = useRef<BaseTableAddOrEditRef>(null);
  const addOrEditHandlerRef = useRef<any>();
  const processedColumns = useFormatColumn(columns);

  useEffect(() => {
    if (addOrEditRef.current) {
      const { doAddOrEdit } = useBaseTableCurd(
        CurdConfig,
        addOrEditRef.current
      );
      addOrEditHandlerRef.current = {
        doAddOrEdit
      };
    }
  }, [addOrEditRef.current]);

  const renderToolbar = () => {
    if (typeof toolbar === "function") {
      return toolbar({ doAddOrEdit: addOrEditHandlerRef.current!.doAddOrEdit });
    }
    return toolbar;
  };

  useImperativeHandle(ref, () => ({
    doAddOrEdit: addOrEditHandlerRef.current?.doAddOrEdit
  }));

  return (
    <div className={style.base_table}>
      <BaseSearchForm<T> columns={columns} />
      <BaseTableAddOrEditDialog<T> colunms={columns} ref={addOrEditRef} />
      <div className={style.base_table_toolbar}>
        <div className={style.base_table_toolbar_custom_button}>
          {renderToolbar()}
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
