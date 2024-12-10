import { ComponentType, FC } from "react";
import { Checkbox, DatePicker, Input, InputNumber, Radio, Select } from "antd";

import type { ValueType } from "../shared";

const { RangePicker } = DatePicker;

const componentMap: Record<ValueType, ComponentType<any>> = {
  text: Input,
  password: Input.Password,
  textarea: Input.TextArea,
  number: InputNumber,
  select: Select,
  radio: Radio.Group,
  checkbox: Checkbox.Group,
  date: DatePicker,
  range: RangePicker
};

interface IDynamicFieldProps {
  valueType?: ValueType;
  [key: string]: any;
}

const DynamicField: FC<IDynamicFieldProps> = ({
  valueType = "text",
  options,
  value = "",
  ...restProps
}) => {
  const Component = componentMap[valueType] || Input;

  return (
    <Component {...restProps} value={value}>
      {/* {(valueType === "select" || valueType === "checkbox") && (
        <Component options={options}></Component>
      )}
      {valueType === "radio" && (
        <Component>
          {options.map((v: any) => (
            <Radio value={v.value}>{v.label}</Radio>
          ))}
        </Component>
      )} */}
    </Component>
  );
};

export default DynamicField;
