import { Form, Select } from "antd";
import React from "react";
export const MobilePrefixSelector = ({ name }) => {
  return (
    <Form.Item name={name} noStyle>
      <Select style={{ width: 90 }}>
        <Select.Option value="+234">+234</Select.Option>
      </Select>
    </Form.Item>
  );
};
