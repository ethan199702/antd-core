import { ReactNode } from "react";
import { type FormProps, type FormItemProps } from "antd";
import type { ValueType } from "../shared";

export interface IFieldItem<T = any> extends FormItemProps {
  name: string | number | (string | number)[];
  label?: string;
  valueType?: ValueType;
  attrs?: Record<string, any>;
  value?: T;
  record?: Record<string, any>;
  render?: (value?: T, record?: Record<string, any>) => ReactNode;
}

export interface IProps<T = Record<string, any>> extends FormProps {
  onFinish?: (values: T) => void;
  formKey?: string;
  request?: (params: T) => Promise<any>;
  fields: IFieldItem<T[keyof T]>[];
  footer?: ReactNode | null | boolean;
  submitText?: string; // 提交按钮文案
}
