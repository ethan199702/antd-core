import { forwardRef, useImperativeHandle, useRef } from "react";
import { FormInstance } from "antd";

import BaseModal from "../BaseModal";
import BaseForm from "../BaseForm";
import type { BaseModalFormRef, IProps } from "./shared";

const BaseModalForm = forwardRef<BaseModalFormRef, IProps>((props, ref) => {
  const { title, fields, confirm } = props;

  const modalRef = useRef<BaseModalFormRef>(null);
  const formRef = useRef<FormInstance>(null);

  const handleSubmit = async () => {
    try {
      // 先校验表单
      await formRef.current?.validateFields();
      // 表单校验通过，执行confirm 根据confirm的返回值来决定是否关闭modal
      if (confirm) return await confirm();
      // 如果没有confirm 直接关闭modal
      return true;
    } catch (e) {
      return false;
    }
  };

  useImperativeHandle(ref, () => ({
    ...modalRef.current!,
    ...formRef.current!
  }));

  return (
    <BaseModal ref={modalRef} title={title} confirm={handleSubmit}>
      <BaseForm fields={fields} ref={formRef} footer={null}></BaseForm>
    </BaseModal>
  );
});
export default BaseModalForm;

