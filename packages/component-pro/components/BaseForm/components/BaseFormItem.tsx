import { Form } from "antd";
import DynamicField from "./DynamicField";
import type { IFieldItem } from "../shared";
import type { FormItemProps } from "antd";

const BaseFormItem = <T,>({
  name,
  label,
  render,
  valueType,
  attrs,
  value,
  record,
  ...restProps
}: IFieldItem<T>) => {
  return (
    <Form.Item<T>
      label={label}
      name={name as FormItemProps<T>["name"]}
      {...restProps}
    >
      {render ? (
        () => render(value, record)
      ) : (
        <DynamicField valueType={valueType} {...attrs}></DynamicField>
      )}
    </Form.Item>
  );
};
export default BaseFormItem;
