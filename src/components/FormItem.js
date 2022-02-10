import React from "react";
import { Form, Input } from "antd";

export const FormItem = ({ children, name, label, rule, placeholder, addonBefore, type, maxLength }) => {
  return (
    <Form.Item name={name} label={label} labelAlign="left" rules={rule}>
      {children || <Input maxLength={maxLength} placeholder={placeholder} addonBefore={addonBefore} type={type} />}
    </Form.Item>
  );
};
