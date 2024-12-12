import type {
  BaseModalRef,
  IProps as BaseModalIprops
} from "../BaseModal/shared";

import type { IProps as BaseFormProps } from "../BaseForm/shared";

export interface BaseModalFormRef extends BaseModalRef {}

export interface IProps<T = Record<string, any>>
  extends BaseModalIprops,
    Omit<BaseFormProps<T>, "children" | "footer" | "title"> {
  title: string;
  footer: BaseModalIprops["footer"];
}

export { BaseFormProps };
