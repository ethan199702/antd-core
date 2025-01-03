import type { TableProps } from "antd";
import type { ColumnType, ColumnGroupType } from "antd/es/table/interface";
import type { ValueType } from "../shared";

type PropertyKey = string | number | symbol;

export type AnyObject = Record<PropertyKey, any>;

export type ColumnsType<RecordType = AnyObject> = (
  | ColumnGroupType<RecordType>
  | ColumnType<RecordType>
)[];

/** Curdconfig 配置项 */
export type CurdConfig<T = AnyObject> = {
  initFormData?: InitFormDataType<T>;
  doAddOrEdit?: (values: T) => void;
};

/** 操作函数 */
export type ToolbarButton<T = AnyObject> = ({
  doAddOrEdit
}: {
  doAddOrEdit: (values?: T) => void;
}) => React.ReactNode;

export interface BaseTableColumnProps<T = AnyObject>
  extends ColumnType<T>,
    Partial<ColumnGroupType<T>> {
  title?: string;
  type?: "selection" | "index" | "expand" | "operation";
  dataIndex?: string;
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
  /** 额外配置 */
  extraProps?: {
    dictType?: string;
    options?: { label: string; value: string }[];
    [key: string]: any;
  };
}

// 初始化表单数据
type InitFormDataType<T> = Partial<T>;

export interface BaseTableProps<T = AnyObject> extends TableProps<T> {
  columns: BaseTableColumnProps<T>[];
  toolbar?: React.ReactNode | ToolbarButton<T>;
  CurdConfig?: CurdConfig<T>;
}
