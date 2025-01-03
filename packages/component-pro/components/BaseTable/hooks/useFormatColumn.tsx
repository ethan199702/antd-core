import type { BaseTableColumnProps, ColumnsType } from "../shared";

const randomNumber = () => {
  return `${Math.random()}`;
};
const useFormatColumn = (columns: BaseTableColumnProps[]): ColumnsType => {
  const WHITE_COLUMN_TYPES = ["selection", "index", "expand", "operation"];

  return columns.map(v => {
    const {
      type,
      valueType = "text",
      dataIndex,
      title,
      render,
      width,
      extraProps
    } = v;

    if (type === "index")
      return {
        title: title || "序号",
        key: randomNumber(),
        width: width || 80,
        render: ({ index }) => {
          return index + 1;
        }
      };
    if (render) {
      return {
        title,
        dataIndex,
        key: randomNumber(),
        render: (text: any, record: any, index: number) => {
          return render(text, record, index);
        }
      };
    }
    switch (valueType) {
      case "text":
        return {
          title,
          dataIndex,
          key: randomNumber()
        };
      case "select":
      case "radio":
      case "checkbox":
        return {
          title,
          dataIndex,
          key: randomNumber(),
          render: (text: any, record: any, index: number) => {
            return text;
          }
        };
      default:
        return {
          title,
          dataIndex,
          key: randomNumber()
        };
    }
  });
};

const useIsSelection = (columns: BaseTableColumnProps[]) => {
  return columns.some(v => v.type === "selection");
};
export { useFormatColumn, useIsSelection };
