import type { BaseTableColumnProps, ColumnsType } from "../shared";

const randomNUmber = () => {
  return `${Math.random()}`;
};
const useFormatColumn = (columns: BaseTableColumnProps[]): ColumnsType => {
  return columns.map(v => {
    const { valueType = "text", dataIndex, title, render } = v;
    if (render) {
      return {
        title,
        dataIndex,
        key: randomNUmber(),
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
          key: randomNUmber()
        };
      case "select":
      case "radio":
      case "checkbox":
        return {
          title,
          dataIndex,
          key: randomNUmber(),
          render: (text: any, record: any, index: number) => {
            return text;
          }
        };
      default:
        return {
          title,
          dataIndex,
          key: randomNUmber()
        };
    }
  });
};

export { useFormatColumn };
