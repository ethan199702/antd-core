import type { TableProps } from "antd";
import type { ColumnType, ColumnGroupType } from "antd/es/table/interface";
import type { ValueType } from "../shared";

type PropertyKey = string | number | symbol;

export type AnyObject = Record<PropertyKey, any>;

export interface BaseTableColumnProps<T = AnyObject>
  extends ColumnType<T>,
    Partial<ColumnGroupType<T>> {
  valueType?: ValueType;
  /** 是否在搜索表单隐藏 */
  hideInSearchForm?: boolean;
  /** 是否在表格中隐藏 */
  hideInTable?: boolean;
  /** 是否在添加、编辑表单隐藏 */
  hideInAddOrEditForm?: boolean;
  /** 自定义渲染表单 如果存在则搜索表单默认渲染这个 */
  renderFormItem?: (record: T, index: number) => React.ReactNode;
  /** 自定义渲染添加、编辑表单 */
  renderAddOrEditFormItem?: (record: T, index: number) => React.ReactNode;
  /** 自定义渲染搜索表单 */
  renderSearchFormItem?: (record: T, index: number) => React.ReactNode;
}

export interface BaseTableProps<T = AnyObject> extends TableProps<T> {
  columns: BaseTableColumnProps<T>[];
}
