import type { ModalProps } from "antd";

export interface BaseModalRef {
  handleOpenModal: () => void;
  handleCancelModal: () => void;
  handleSubmitModal: () => void;
}
export interface IProps extends ModalProps {
  submitText?: string;
  cancelText?: string;
  confirm?: () => Promise<boolean>;
}
