import { Form, Input, Button } from "antd";
import { AddOrderWrapper } from "./styled";

const FormAddOrder = (props) => {
  const { onFinish, onFinishFailed, ref } = props;
  return (
    <AddOrderWrapper>
      <h1 className="title">เพิ่มรายการ</h1>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="content"
      >
        <div className="row-content">
          <div className="order">
            <div>ชื่อรายการ</div>
            <Form.Item
              name="orderName"
              rules={[{ required: true, message: "กรุณากรอกชื่อรายการอาหาร!" }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div>
            <div>จำนวนแคลอรี่(แคลอรี่)</div>
            <Form.Item
              name="calories"
              rules={[{ required: true, message: "กรุณากรอกจำนวนแคลอรี่!" }]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            เพิ่ม +
          </Button>
        </Form.Item>
      </Form>
    </AddOrderWrapper>
  );
};

export default FormAddOrder;
