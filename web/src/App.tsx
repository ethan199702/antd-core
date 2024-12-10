import { BaseForm } from "@antd-core/components-pro/components";
import type { IFieldItem } from "@antd-core/components-pro/components/BaseForm/shared";

const App = () => {
  const fields: IFieldItem[] = [
    {
      name: "name",
      label: "Name"
    },
    {
      name: "user",
      label: "User"
    }
  ];
  return (
    <div>
      <BaseForm<{ name: string; user: string }> fields={fields}></BaseForm>
    </div>
  );
};

export default App;

