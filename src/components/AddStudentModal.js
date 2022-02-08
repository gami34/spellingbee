import React from "react";
import { Form, Input, Button, Modal, Select } from "antd";

const AddStudentModal = ({ record, setRecord, onStudentEdit, onStudentSubmit, addStudentFormvisible, setAddStudentFormVisible }) => {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
    },
  };

  const prefixSelector = (
    <Form.Item name="parent_mobile_prefix" noStyle>
      <Select style={{ width: 90 }}>
        <Select.Option value="+234">+234</Select.Option>
      </Select>
    </Form.Item>
  );
  return (
    <Modal
      closable={true}
      destroyOnClose={true}
      footer={null}
      title="Add New Student"
      centered
      visible={addStudentFormvisible}
      onCancel={() => {
        setRecord({});
        setAddStudentFormVisible(false);
      }}
      className="w-10/12"
    >
      <Form
        name="individual_signup"
        className="w-full"
        onFinish={record.key ? onStudentEdit : onStudentSubmit}
        {...formItemLayout}
        initialValues={{
          mobile_prefix: "+234",
          parent_mobile_prefix: "+234",
          student_name: record.student_name,
          student_age: record.student_age,
          parent_name: record.parent_name,
          parent_mobile_suffix: record.parent_number && record.parent_number.slice(4, record.parent_number.length),
          parent_address: record.parent_address,
          parent_email: record.parent_email,
        }}
      >
        <h3 className="text-center w-full text-lg">Student Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          <Form.Item
            name="student_name"
            label="Student's Name:"
            labelAlign="left"
            rules={[
              {
                required: true,
                message: "Student name!",
              },
            ]}
          >
            <Input placeholder="Student name" />
          </Form.Item>
          <Form.Item
            name="student_age"
            labelAlign="left"
            label="Student's Age:"
            rules={[
              {
                required: true,
                message: "Student age!",
              },
            ]}
          >
            <Input placeholder="Student's age" />
          </Form.Item>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          <Form.Item
            name="parent_name"
            label="Parent's Name:"
            labelAlign="left"
            rules={[
              {
                required: true,
                message: "Parent name!",
              },
            ]}
          >
            <Input placeholder="Parent Name" />
          </Form.Item>

          <Form.Item
            name="parent_mobile_suffix"
            labelAlign="left"
            label="Parent No:"
            rules={[
              {
                required: true,
                message: "Parent's number!",
              },
            ]}
          >
            <Input addonBefore={prefixSelector} placeholder="Parent's Number" />
          </Form.Item>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mb-6">
          <Form.Item
            name="parent_address"
            label="Parent's Address:"
            labelAlign="left"
            rules={[
              {
                required: true,
                message: "Parent's address!",
              },
            ]}
          >
            <Input placeholder="Parent Address" />
          </Form.Item>

          <Form.Item
            name="parent_email"
            labelAlign="left"
            label="Parent Email:"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
              {
                type: "email",
                message: "Please input a valid email!",
              },
            ]}
          >
            <Input type="email" placeholder="Parent Email" />
          </Form.Item>
        </div>
        <Form.Item className="flex">
          <Button type="primary" htmlType="submit" className={` py-2 flex-1 w-8/12`}>
            Add Student Info
          </Button>
          <Button type="primary" htmlType="reset" className="py-2 w-3/12 float-right">
            Clear
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddStudentModal;
