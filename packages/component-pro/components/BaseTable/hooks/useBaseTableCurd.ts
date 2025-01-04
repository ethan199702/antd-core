import type { CurdConfig } from "../shared";
import type { BaseTableAddOrEditRef } from "../curd/BaseTableAddOrEditDialog/shared";

export const useBaseTableCurd = (
  curdConfig: CurdConfig,
  modalFormRef: BaseTableAddOrEditRef
) => {
  const doAddOrEdit = (values: any) => {
    if (!curdConfig.onAddOrEdit) {
      console.warn(
        "表格的添加和新增请求暂未配置,请在CurdConfig配置中配置【onAddOrEdit】"
      );
    }
    if (curdConfig.onAddOrEdit) {
      modalFormRef?.handleOpenModal();
    }
  };
  return {
    doAddOrEdit
  };
};
