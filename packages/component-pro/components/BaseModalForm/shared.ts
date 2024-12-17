import type {
  BaseModalRef,
  IProps as BaseModalIProps
} from "../BaseModal/shared";

import type { IProps as BaseFormProps } from "../BaseForm/shared";

export interface BaseModalFormRef extends BaseModalRef {}

export interface IProps<T = Record<string, any>>
  extends Omit<BaseModalIProps, "confirm">,
    Omit<BaseFormProps<T>, "children" | "footer" | "title"> {
  title: string;
  footer?: BaseModalIProps["footer"];
  confirm?: (() => Promise<boolean>) | (() => boolean);
}

export { BaseFormProps };

