import React from "react";
import { NavLink } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import * as ROUTES from "../constants/routes";

const Signin = () => {
  const onSubmit = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="flex items-center justify-center flex-col gap-4 custom-bg h-screen min-h-80 overflow-hidden">
      <div className="min-w-60 w-4/12 flex items-center justify-center overflow-hidden">
        <NavLink to={ROUTES.HOME} className="w-full sm:w-6/12 block">
          <img className="w-full" src="/images/cb1.png" alt="chessbattkefield logo" />
        </NavLink>
      </div>
      <div className="min-h-80 min-w-80 w-4/12 lg:w-3/12 bg-green-light rounded-lg drop-shadow-lg shadow-green-dark overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8 w-full h-full">
          <div className="w-full h-full flex items-center">
            <Form
              name="signup"
              className="w-full"
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
                <Input prefix={<MailOutlined />} placeholder="Username" />
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
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
