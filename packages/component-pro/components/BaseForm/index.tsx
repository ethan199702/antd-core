import {
  forwardRef,
  useImperativeHandle,
  useRef,
  Ref,
  ReactElement
} from "react";
import { Button, Form, FormInstance, Space } from "antd";

import BaseFormItem from "./components/BaseFormItem";
import type { IProps } from "./shared";

const BaseForm = <T extends Record<string, any> = any>(
  props: IProps<T>,
  ref: Ref<FormInstance<T>>
) => {
  const {
    formKey,
    request,
    fields,
    submitText = "提交",
    footer,
    labelCol = { span: 4 },
    wrapperCol = { span: 20 },
    ...restProps
  } = props;
  const formRef = useRef<FormInstance<T>>(null);

  useImperativeHandle(ref, () => ({
    ...(formRef.current as FormInstance<T>)
  }));

  return (
    <Form
      ref={formRef}
      {...restProps}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      onFinish={props?.onFinish}
    >
      {fields.map((field, index) => (
        <BaseFormItem {...field} key={index}></BaseFormItem>
      ))}
      {footer ? (
        footer
      ) : (
        <Form.Item
          labelCol={labelCol}
          wrapperCol={wrapperCol}
          label=" "
          colon={false}
        >
          <Space>
            <Button>取消</Button>
            <Button type="primary" htmlType="submit">
              {submitText}
            </Button>
          </Space>
        </Form.Item>
      )}
    </Form>
  );
};

export default forwardRef(BaseForm) as <T extends Record<string, any> = any>(
  props: IProps<T> & { ref?: Ref<FormInstance<T>> }
) => ReactElement;
