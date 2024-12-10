import { ReactNode } from "react";
import { type FormProps, type FormItemProps } from "antd";

export type ValueType =
  | "text"
  | "select"
  | "radio"
  | "checkbox"
  | "date"
  | "range"
  | "number"
  | "password"
  | "textarea";

export interface IFieldItem<T = any> extends FormItemProps {
  name: string | number | (string | number)[];
  label?: string;
  valueType?: ValueType;
  attrs?: Record<string, any>;
  value?: T;
  record: Record<string, any>;
  render?: (value: T, record: Record<string, any>) => ReactNode;
}

export interface IProps<T = Record<string, any>> extends FormProps {
  children: ReactNode;
  onFinish?: (values: T) => Promise<any>;
  formKey?: string;
  request?: (params: T) => Promise<any>;
  fields: IFieldItem<T[keyof T]>[];
}
