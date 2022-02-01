import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Form, Input, Button, Checkbox, Divider } from "antd";
import { MailOutlined, LockOutlined, KeyOutlined } from "@ant-design/icons";
import * as ROUTES from "../constants/routes";

const Signup = () => {
  const [submitProcessing, setSubmitProcessing] = useState(false);
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
    },
    wrapperCol: {
      xs: { span: 24 },
    },
  };
  const onSubmit = (values) => {
    setSubmitProcessing(true);
  };
  return (
    <div className="flex items-center justify-center flex-col gap-4 custom-bg h-screen min-h-80 overflow-hidden">
      <div className="min-w-80 w-4/12 lg:w-3/12 flex items-center justify-center overflow-hidden">
        <NavLink to={ROUTES.HOME} className="w-full mx-2 sm:w-6/12 lg:w-8/12 block">
          <img className="w-full" src="/images/cb1.png" alt="chessbattkefield logo" />
        </NavLink>
      </div>
      <div className="min-h-80 min-w-80 w-4/12 lg:w-3/12 bg-green-light rounded-lg drop-shadow-lg shadow-green-dark overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 w-full h-full">
          <div className="w-full h-full flex items-center flex-col">
            <Form name="signup" className="w-full" onFinish={onSubmit} {...formItemLayout}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                  {
                    type: "email",
                    message: "Please input a valid email!",
                  },
                ]}
              >
                <Input type="email" prefix={<MailOutlined />} placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                className="my-0"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item
                name="secret"
                label="Password Recovery Word?"
                tooltip="A secret word tied to your first dwelling place?"
                labelAlign="left"
                className="my-0"
                rules={[
                  {
                    required: true,
                    validator: async (_, value) => {
                      if (!value) return Promise.reject(new Error("secret word cnanot be empty"));
                      const regex = /\s/;
                      if (!regex.test(value)) return Promise.resolve();
                      return Promise.reject(new Error("secret word cannot contain spaces"));
                    },
                  },
                ]}
              >
                <Input.Password prefix={<KeyOutlined />} placeholder="First dwelling place secret word" />
              </Form.Item>
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: async (_, value) => (value ? Promise.resolve() : Promise.reject(new Error("Should accept agreement"))),
                  },
                ]}
                noStyle
              >
                <Checkbox className="text-xs">
                  I have read and agreed to the
                  <Link to={ROUTES.TERMS} className="text-red-600">
                    Terms and condition{" "}
                  </Link>
                  and{" "}
                  <Link to={ROUTES.POLICY} className="text-red-600">
                    Policy
                  </Link>{" "}
                  of this platform
                </Checkbox>
              </Form.Item>

              <Form.Item className="flex my-0">
                <Button loading={submitProcessing} type="primary" htmlType="submit" className={`flex-1 ${submitProcessing ? "w-full" : "w-8/12"} `}>
                  Sign Up
                </Button>
                <Button type="primary" style={{ display: submitProcessing && "none" }} htmlType="reset" className=" w-3/12 float-right">
                  Reset
                </Button>
              </Form.Item>
              <Divider className="m-0">
                <span className="text-sm">Already Signed Up ?</span>
              </Divider>
              <div className="w-full flex items-center justify-center">
                <Link to={ROUTES.SIGNIN} className="text-green-dark text-sm hover:text-yellow-500">
                  Sign In
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
