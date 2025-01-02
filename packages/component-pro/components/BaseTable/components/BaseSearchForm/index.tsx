import { useRef, forwardRef, ReactElement } from "react";
import { Button, Form, Space, FormInstance } from "antd";

import BaseForm from "../../../BaseForm";
import type { BaseTableColumnProps, AnyObject } from "../../shared";
import { useFormatSearch } from "../../hooks/useFormatSearch";

import styles from "./index.module.less";

interface Iprops<T> {
  columns: BaseTableColumnProps[];
  initFormData?: T;
}
const BaseSearchForm = <T extends AnyObject>(props: Iprops<T>, ref: any) => {
  const { columns } = props;
  const formRef = useRef<FormInstance>(null);
  const fields = useFormatSearch(columns);

  const doSearch = () => {
    const search = formRef.current?.getFieldsValue();
    console.log(search);
  };

  const footer = (
    <Form.Item>
      <Space>
        <Button type="primary" htmlType="submit" onClick={doSearch}>
          查询
        </Button>
        <Button>重置</Button>
      </Space>
    </Form.Item>
  );

  return (
    <div className={styles.base_search_form}>
      <BaseForm<T>
        fields={fields}
        footer={footer}
        layout="inline"
        ref={formRef}
      ></BaseForm>
    </div>
  );
};
export default forwardRef(BaseSearchForm) as <T extends AnyObject = AnyObject>(
  props: Iprops<T> & { ref?: any }
) => ReactElement;
