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
    <>
      {["select", "checkbox"].includes(valueType) && (
        <Component options={options}></Component>
      )}
      {["radio"].includes(valueType) && (
        <Component>
          {options.map((v: any) => (
            <Radio value={v.value}>{v.label}</Radio>
          ))}
        </Component>
      )}
      <Component {...restProps} value={value} />
    </>
  );
};

export default DynamicField;
