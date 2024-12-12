import { forwardRef, useImperativeHandle, useRef } from "react";
import { FormInstance } from "antd";

import BaseModal from "../BaseModal";
import BaseForm from "../BaseForm";
import type { BaseModalFormRef, IProps } from "./shared";

const BaseModalForm = forwardRef<BaseModalFormRef, IProps>((props, ref) => {
  const { title, fields } = props;

  const modalRef = useRef<BaseModalFormRef>(null);
  const formRef = useRef<FormInstance>(null);

  useImperativeHandle(ref, () => ({
    ...modalRef.current!,
    ...formRef.current!
  }));

  return (
    <BaseModal ref={modalRef} title={title}>
      <BaseForm fields={fields} ref={formRef}></BaseForm>
    </BaseModal>
  );
});
export default BaseModalForm;
