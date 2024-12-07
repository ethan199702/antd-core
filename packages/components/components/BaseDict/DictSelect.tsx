import { FC, useEffect, useState } from "react";
import { Select } from "antd";

interface IProps {
  distType?: string;
  options?: {
    label: string;
    value: string | number;
  }[];
}

const DistSelect: FC<IProps> = ({ distType, options }) => {
  const [list, setList] = useState(options || []);

  useEffect(() => {}, []);
  return <Select options={list}></Select>;
};

export default DistSelect;
