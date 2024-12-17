import type { TableProps, TableColumnsType } from "antd";

type PropertyKey = string | number | symbol;

export type AnyObject = Record<PropertyKey, any>;

export interface BaseTableColumn<T = AnyObject> extends TableColumnsType<T> {}

export interface BaseTableProps<T = AnyObject> extends TableProps<T> {
  columns: BaseTableColumn<T>;
}
