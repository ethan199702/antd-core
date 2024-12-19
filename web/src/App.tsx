import { BaseTable } from "@antd-core/components-pro/components";

const App = () => {
  const columns = [
    {
      title: "NAME",
      dataIndex: "name"
    },
    {
      title: "AGE",
      dataIndex: "age"
    }
  ];

  const data = [
    { name: "a", age: 1, index: 1 },
    { name: "b", age: 12, index: 2 }
  ];
  return (
    <BaseTable columns={columns} dataSource={data} rowKey={"index"}></BaseTable>
  );
};

export default App;
