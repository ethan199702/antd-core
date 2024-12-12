import {
  BaseForm,
  BaseModal,
  BaseModalForm
} from "@antd-core/components-pro/components";
import type { IFieldItem } from "@antd-core/components-pro/components/BaseForm/shared";
import type { BaseModalRef } from "@antd-core/components-pro/components/BaseModal/shared";
import type { BaseModalFormRef } from "@antd-core/components-pro/components/BaseModalForm/shared";
import { useRef } from "react";
import { Button } from "antd";

type FormValues = {
  name: string;
  user: string;
  address: string;
};
const App = () => {
  const fields: IFieldItem[] = [
    {
      name: "name",
      label: "Name",
      rules: [{ required: true, message: "Name is required" }]
    },
    {
      name: "user",
      label: "User",
      rules: [{ required: true, message: "User is required" }]
    },
    {
      name: "address",
      label: "Address",
      render: (value, record) => {
        return <div>111</div>;
      }
    }
  ];
  const modalRef = useRef<BaseModalRef>(null);
  const modalFormRef = useRef<BaseModalFormRef>(null);

  const onFinish = (val: FormValues) => {
    console.log(val);
  };
  const open = () => {
    if (modalRef.current) {
      modalRef.current.handleOpenModal();
    }
  };

  const open2 = () => {
    if (modalFormRef.current) {
      modalFormRef.current.handleOpenModal();
    }
  };
  return (
    <div>
      <BaseForm<FormValues> fields={fields} onFinish={onFinish}></BaseForm>
      <Button onClick={open2}>Modal</Button>
      <BaseModalForm
        ref={modalFormRef}
        title="Modal"
        fields={fields}
        footer={null}
      ></BaseModalForm>
      <Button onClick={open}>11</Button>
      <BaseModal
        ref={modalRef}
        title="Modal"
        confirm={async () => {
          return false;
        }}
      >
        <div>11111</div>
      </BaseModal>
    </div>
  );
};

export default App;

