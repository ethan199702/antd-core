import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";
import { Form, FormInstance, type FormProps } from "antd";

interface Iprops extends FormProps {
  children: ReactNode;
}

const BaseForm = forwardRef<FormInstance, Iprops>((props, ref) => {
  const { children } = props;
  const formRef = useRef<FormInstance>(null);

  useImperativeHandle(ref, () => ({
    ...(formRef.current as FormInstance)
  }));

  return (
    <Form ref={formRef} {...props}>
      {children}
    </Form>
  );
});

export default BaseForm;
