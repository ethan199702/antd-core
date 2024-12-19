import { useEffect, useState } from "react";
import { Button, Form, Space } from "antd";

import BaseForm from "../../../BaseForm";
import type { BaseTableColumnProps } from "../../shared";

import styles from "./index.module.less";

interface Iprops {
  columns: BaseTableColumnProps[];
}
const BaseSearchForm = (props: Iprops) => {
  const { columns } = props;
  const [fields, setFields] = useState<any[]>([]);

  useEffect(() => {
    const fields = columns
      .filter(column => !column.hideInSearchForm)
      .map(column => ({
        name: column.dataIndex,
        label: column.title,
        valueType: column.valueType || "text"
      }));
    setFields(fields);
  }, []);

  const footer = (
    <Form.Item>
      <Space>
        <Button type="primary" htmlType="submit">
          查询
        </Button>
        <Button>重置</Button>
      </Space>
    </Form.Item>
  );
  return (
    <div className={styles.base_search_form}>
      <BaseForm fields={fields} footer={footer} layout="inline"></BaseForm>
    </div>
  );
};
export default BaseSearchForm;
