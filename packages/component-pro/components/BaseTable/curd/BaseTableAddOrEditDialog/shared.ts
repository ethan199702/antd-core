import type { BaseModalFormRef } from "../../../BaseModalForm/shared";

export interface BaseTableAddOrEditRef extends BaseModalFormRef {}
export interface BaseAddOrEditConfig {
  onAddOrEdit?: (values: any) => boolean;
}
