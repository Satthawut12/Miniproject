import { ManageWrapper } from "./styled";
import List from "../../components/Layout/components/list";
import FormAddOrder from "../../components/FormAddOrder";
import axios from "axios";
import { message } from "antd";
import React from "react";

const ManageScreen = (props) => {
  const { token } = props;

  const onFinish = async (values) => {
    console.log(values);

    const result = await axios.post(
      `http://localhost:4000/api/addmenu`,
      { menuName: values?.orderName, totalCal: values?.calories },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (result?.status === 200) {
      message.success({ content: "เพิ่มรายการสำเร็จ" });
    }
  };

  const onFinishFailed = (values) => {
    console.log(values);
  };

  return (
    <ManageWrapper>
      <FormAddOrder
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      />
    </ManageWrapper>
  );
};

export default ManageScreen;
