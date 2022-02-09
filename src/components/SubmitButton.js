import { Button, Form } from "antd";
import React from "react";

export const SubmitButton = ({ submitProcessing }) => {
  return (
    <Form.Item className="flex">
      <Button loading={submitProcessing} type="primary" htmlType="submit" className={` py-2 flex-1 ${submitProcessing ? "w-full" : "w-8/12"} `}>
        Make Payment
      </Button>
      <Button type="primary" style={{ display: submitProcessing && "none" }} htmlType="reset" className="py-2 w-3/12 float-right">
        Clear
      </Button>
    </Form.Item>
  );
};
