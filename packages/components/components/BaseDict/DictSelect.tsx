import { FC, useEffect, 
  
 } from "react";
import { Select } from "antd";

interface IProps {
  distType?: string;
  options?: {
    label: string;
    value: string | number;
  }[];
}

const DistSelect: FC<IProps> = () => {

  useEffect(() => {}, []);
  return <Select ></Select>;
};

export default DistSelect;
