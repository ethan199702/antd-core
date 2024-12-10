import {
  forwardRef,
  useImperativeHandle,
  useRef,
  Ref,
  ReactElement
} from "react";
import { Form, FormInstance } from "antd";
import type { IProps } from "./shared";

const BaseForm = <T extends Record<string, any> = any>(
  props: IProps<T>,
  ref: Ref<FormInstance<T>>
) => {
  const { children, ...restProps } = props;
  const formRef = useRef<FormInstance<T>>(null);

  useImperativeHandle(ref, () => ({
    ...(formRef.current as FormInstance<T>)
  }));

  return (
    <Form ref={formRef} {...restProps}>
      {children}
    </Form>
  );
};

export default forwardRef(BaseForm) as <T extends Record<string, any> = any>(
  props: IProps<T> & { ref?: Ref<FormInstance<T>> }
) => ReactElement;
