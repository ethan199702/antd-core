import { forwardRef, useImperativeHandle, useState } from "react";
import { Modal } from "antd";

import type { IProps, BaseModalRef } from "./shared";

const BaseModal = forwardRef<BaseModalRef, IProps>(
  ({ title, footer, children, confirm, ...restProps }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };

    const handleCancelModal = () => {
      setIsModalOpen(false);
    };

    const handleSubmitModal = async () => {
      // 如果没传confirm，直接关闭
      if (!confirm) {
        setIsModalOpen(false);
        return;
      }

      // 如果传了confirm，执行confirm，返回true才关闭
      const res = await confirm();

      setIsModalOpen(!res);
    };

    useImperativeHandle(ref, () => ({
      handleOpenModal,
      handleCancelModal,
      handleSubmitModal
    }));
    return (
      <Modal
        title={title}
        footer={footer}
        {...restProps}
        open={isModalOpen}
        onCancel={handleCancelModal}
        onOk={handleSubmitModal}
      >
        {children}
      </Modal>
    );
  }
);

export default BaseModal;
