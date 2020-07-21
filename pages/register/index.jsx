import React, { useState } from "react";
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

const { Option } = Select;

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleRegister = async (values) => {
    console.log(values);
    const tmp = new ObjectID();
    const dateTimeFormat = new Intl.DateTimeFormat("id");
    const id = tmp.toHexString();
    const { name, dob, username, password, gender, email, address } = values;
    const date = dateTimeFormat.format(dob);
    const content = {
      id,
      name,
      dob: date,
      username,
      password,
      gender,
      email,
      address,
    };
    try {
      await Axios.post("https:freelib-api.herokuapp.com/api/register", content);
      Router.push("/login");
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
        <Form.Item
          label="Tài khoản"
          name="username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Nhập lại mật khẩu"
          name="password2"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
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
          <Button htmlType="submit">Đăng ký</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormSizeDemo;
