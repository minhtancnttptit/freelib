import React, { useState, useContext } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { ObjectID } from "bson";
import Axios from "axios";
import Router from "next/router";
import { observer, MobXProviderContext } from "mobx-react";

const { Option } = Select;

const FormSizeDemo = observer(() => {
  const { globalStore } = useContext(MobXProviderContext);
  const { isAuthen, account, setAccount } = globalStore;

  if (!isAuthen) {
    return <h2>Vui lòng đăng nhập</h2>;
  }

  const { id } = account;

  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleRegister = async (values) => {
    const dateTimeFormat = new Intl.DateTimeFormat("id");
    const { name, dob, username, password, gender, email, address } = values;
    const date = dateTimeFormat.format(dob);
    const content = {
      id: id,
      name,
      dob: date,
      gender,
      email,
      address,
    };
    try {
      const { status, data } = await Axios.put(
        "https://freelib-api.herokuapp.com/api/user",
        content
      );
      if (status === 200) {
        setAccount(data);
        console.log(data);
      }
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ width: "800px", margin: "0 auto", marginTop: "30px" }}>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={handleRegister}
      >
        <Form.Item
          label="Họ tên"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ngày sinh"
          name="dob"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item label="Giới tính" name="gender" rules={[{ required: true }]}>
          <Select style={{ width: 120 }} onChange={() => {}}>
            <Option value="male">Nam</Option>
            <Option value="famale">Nữ</Option>
            <Option value="other">Khác</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Thể loại yêu thích" name="topic">
          <Select mode="multiple" onChange={() => {}}>
            <Option value="programming">programming</Option>
            <Option value="linguistics">linguistics</Option>
            <Option value="economics">economics</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button htmlType="submit">Gửi</Button>
        </Form.Item>
      </Form>
    </div>
  );
});

export default FormSizeDemo;
