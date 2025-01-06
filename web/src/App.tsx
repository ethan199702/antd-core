import { BaseTable } from "@antd-core/components-pro/components";
import { Button, Space } from "antd";
import {
  PlusOutlined,
  DownloadOutlined,
  UploadOutlined,
  DeleteOutlined
} from "@ant-design/icons";

const App = () => {
  const columns = [
    { type: "index" as "index" | "selection" | "expand" | "operation" },
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
    <BaseTable<{ name: string; age: number; index: number }>
      columns={columns}
      dataSource={data}
      rowKey={"index"}
      CurdConfig={{
        initFormData: { name: "a", age: 1 },
        onAddOrEdit: values => {
          console.log("onAddOrEdit", values);
          return false;
        }
      }}
      toolbar={({ doAddOrEdit }) => (
        <Space>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              doAddOrEdit();
            }}
          >
            新增
          </Button>
          <Button type="primary" icon={<UploadOutlined />}>
            导入
          </Button>
          <Button type="primary" icon={<DownloadOutlined />}>
            导出
          </Button>
          <Button type="primary" danger icon={<DeleteOutlined />}>
            批量删除
          </Button>
        </Space>
      )}
    ></BaseTable>
  );
};

export default App;
