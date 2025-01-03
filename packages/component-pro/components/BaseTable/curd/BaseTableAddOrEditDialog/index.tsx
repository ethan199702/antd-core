import { forwardRef, ReactElement } from "react";
import BaseModalForm from "../../../BaseModalForm";
import type { BaseTableColumnProps, AnyObject } from "../../shared";
import { useCurdConfig } from "../../hooks/useCurdConfig";
interface Iprops<T> {
  colunms: BaseTableColumnProps<T>[];
}

const BaseTableAddOrEditDialog = <T extends AnyObject>(
  props: Iprops<T>,
  ref: any
) => {
  const { colunms } = props;
  const fields = useCurdConfig(colunms);

  return <BaseModalForm title="新增" fields={fields}></BaseModalForm>;
};

export default forwardRef(BaseTableAddOrEditDialog) as <
  T extends AnyObject = AnyObject
>(
  props: Iprops<T> & { ref?: any }
) => ReactElement;
