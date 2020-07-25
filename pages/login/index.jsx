import React, { useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Axios from "axios";
import { MobXProviderContext, useLocalStore, observer } from "mobx-react";

const Login = observer(() => {
  const store = useLocalStore(() => ({
    wrong: false,
    setWrong: () => {
      store.wrong = true;
    },
  }));
  const { wrong, setWrong } = store;

  const { globalStore } = useContext(MobXProviderContext);
  const { isAuthen, setAuthen, setAccount } = globalStore;
  if (isAuthen) {
    return <></>;
  }

  const onSubmit = async (values) => {
    try {
      const content = {
        username: values.username.trim(),
        password: values.password.trim(),
      };
      const res = await Axios.post("http://localhost:8080/api/login", content);
      const { data, status } = res;
      if (status === 200) {
        setAuthen(true);
        setAccount(data);
        Router.push("/");
      }
    } catch (error) {
      console.log(error);
      setWrong();
    }
  };

  return (
    <div style={{ width: "600px", margin: "0 auto", marginTop: "30px" }}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {wrong && (
          <h3 style={{ color: "#ff4d4f" }}>Sai tên tài khoản hoặc mật khẩu</h3>
        )}
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Nhớ mật khẩu</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Quên mật khẩu
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Đăng nhập
          </Button>
          Hoặc <Link href="/register">Đăng ký</Link>
        </Form.Item>
      </Form>
    </div>
  );
});

export default Login;
