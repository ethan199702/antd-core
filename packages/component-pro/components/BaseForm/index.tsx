import {
  forwardRef,
  useImperativeHandle,
  useRef,
  Ref,
  ReactElement
} from "react";
import { Button, Form, FormInstance } from "antd";

import BaseFormItem from "./components/BaseFormItem";
import type { IProps } from "./shared";

const BaseForm = <T extends Record<string, any> = any>(
  props: IProps<T>,
  ref: Ref<FormInstance<T>>
) => {
  const { ...restProps } = props;
  const formRef = useRef<FormInstance<T>>(null);

  useImperativeHandle(ref, () => ({
    ...(formRef.current as FormInstance<T>)
  }));

  return (
    <Form ref={formRef} {...restProps}>
      {props.fields.map((field, index) => (
        <BaseFormItem {...field} key={index}></BaseFormItem>
      ))}
      <Form.Item>
        <Button
          type="primary"
          onClick={() => {
            const res = formRef.current?.getFieldsValue();
            console.log(res);
          }}
        >
          确定
        </Button>
      </Form.Item>
    </Form>
  );
};

export default forwardRef(BaseForm) as <T extends Record<string, any> = any>(
  props: IProps<T> & { ref?: Ref<FormInstance<T>> }
) => ReactElement;
