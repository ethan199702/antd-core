import type { CurdConfig } from "../shared";

export const useBaseTableCurd = (curdConfig: CurdConfig) => {
  const doAddOrEdit = (values: any) => {
    if (!curdConfig.doAddOrEdit) {
      console.warn(
        "表格的添加和新增请求暂未配置,请在CurdConfig配置中配置【onAddOrEdit】"
      );
    }
    if (curdConfig.doAddOrEdit) {
      curdConfig.doAddOrEdit(values);
    }
  };

  return {
    doAddOrEdit
  };
};
