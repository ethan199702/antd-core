import { BaseForm } from "@antd-core/components-pro";
import { Form } from "antd";

const App = () => {
  return (
    <div>
      <BaseForm<{ name: string }>>
        <Form.Item label="11"></Form.Item>
      </BaseForm>
    </div>
  );
};

export default App;

