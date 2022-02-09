import React from "react";
import { Form, Button, Modal } from "antd";
import { FormItem } from "./FormItem";
import * as FormRules from "../constants/formRules";
import { MobilePrefixSelector } from "./MobilePrefixSelector";
import { formItemLayout } from "../constants/formItemLayout";

const AddStudentModal = ({ record, setRecord, onStudentEdit, onStudentSubmit, addStudentFormvisible, setAddStudentFormVisible }) => {
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
          <FormItem name="student_name" label="Student's Name:" rule={FormRules.studentNameFormRule} />
          <FormItem name="student_age" label="Student's Age:" rule={FormRules.studentAgeFormRule} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          <FormItem name="parent_name" label="Parent's Name:" rule={FormRules.parentNameFormRule} />
          <FormItem name="parent_mobile_suffix" label="Parent No:" rule={FormRules.parentMobileSuffixFormRule} addonBefore={<MobilePrefixSelector name="parent_mobile_prefix" />} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mb-6">
          <FormItem name="parent_address" label="Parent's Address:" rule={FormRules.parentAddressFormRule} />
          <FormItem name="parent_email" label="Parent Email:" rule={FormRules.parentEmailFormRule} type="email" />
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
