import {
  forwardRef,
  useImperativeHandle,
  useRef,
  Ref,
  ReactElement
} from "react";
import { Button, Form, Space } from "antd";

import BaseFormItem from "./components/BaseFormItem";
import type { IProps, BaseFormInstance } from "./shared";

const BaseForm = <T extends Record<string, any> = any>(
  props: IProps<T>,
  ref: Ref<BaseFormInstance<T>>
) => {
  const {
    formKey,
    request,
    fields,
    submitText = "提交",
    footer = true,
    labelCol = { span: 6 },
    wrapperCol = { span: 18 },
    ...restProps
  } = props;
  const formRef = useRef<BaseFormInstance<T>>(null);

  useImperativeHandle(ref, () => ({
    ...(formRef.current as BaseFormInstance<T>)
  }));

  const formFooter = () => {
    if (footer === true)
      return (
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
      );

    if (footer === false || footer === null) return null;

    return footer;
  };

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
      {formFooter()}
    </Form>
  );
};

export default forwardRef(BaseForm) as <T extends Record<string, any> = any>(
  props: IProps<T> & { ref?: Ref<BaseFormInstance<T>> }
) => ReactElement;
