import {
  forwardRef,
  ReactElement,
  useRef,
  useImperativeHandle,
  Ref
} from "react";
import BaseModalForm from "../../../BaseModalForm";

import { useCurdConfig } from "../../hooks/useCurdConfig";

import type { BaseTableColumnProps, AnyObject, CurdConfig } from "../../shared";
import type { BaseModalFormRef } from "../../../BaseModalForm/shared";
import type { BaseTableAddOrEditRef } from "./shared";
interface Iprops<T> {
  colunms: BaseTableColumnProps<T>[];
  CurdConfig?: CurdConfig<T>;
}

const BaseTableAddOrEditDialog = <T extends AnyObject>(
  props: Iprops<T>,
  ref: any
) => {
  const { colunms, CurdConfig = {} } = props;
  const { onAddOrEdit } = CurdConfig;
  const modalFormRef = useRef<BaseModalFormRef>(null);
  const fields = useCurdConfig(colunms);

  const handleOpenModal = () => {
    modalFormRef.current?.handleOpenModal();
  };

  const handleConfirm = async () => {
    if (!onAddOrEdit)
      console.warn(
        "表格的添加和新增请求暂未配置,请在CurdConfig配置中配置【onAddOrEdit】"
      );
    else {
      const param = modalFormRef.current?.getFieldsValue();
      return onAddOrEdit(param);
    }
    return false;
  };

  useImperativeHandle(ref, () => ({
    ...modalFormRef.current!,
    handleOpenModal
  }));

  return (
    <BaseModalForm
      title="新增"
      fields={fields}
      ref={modalFormRef}
      confirm={handleConfirm}
    ></BaseModalForm>
  );
};

export default forwardRef(BaseTableAddOrEditDialog) as <
  T extends AnyObject = AnyObject
>(
  props: Iprops<T> & { ref?: Ref<BaseTableAddOrEditRef> }
) => ReactElement;
