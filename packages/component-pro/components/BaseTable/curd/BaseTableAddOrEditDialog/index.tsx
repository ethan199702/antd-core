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
  const { colunms } = props;
  const modalFormRef = useRef<BaseModalFormRef>(null);
  const fields = useCurdConfig(colunms);

  const handleOpenModal = () => {
    modalFormRef.current?.handleOpenModal();
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
    ></BaseModalForm>
  );
};

export default forwardRef(BaseTableAddOrEditDialog) as <
  T extends AnyObject = AnyObject
>(
  props: Iprops<T> & { ref?: Ref<BaseTableAddOrEditRef> }
) => ReactElement;
