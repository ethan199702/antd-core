import { Form, FormInstance, type FormProps } from "antd";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface Iprops extends FormProps {}

const BaseForm = forwardRef<FormInstance, Iprops>(props => {
  const formRef = useRef<FormInstance>(null);
  return <Form ref={formRef} {...props}></Form>;
});

export default BaseForm;
