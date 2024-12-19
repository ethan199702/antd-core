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
    { name: "a", age: 1 },
    { name: "b", age: 12 }
  ];
  return <BaseTable columns={columns} dataSource={data}></BaseTable>;
};

export default App;
