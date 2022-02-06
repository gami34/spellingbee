import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Divider, Select } from "antd";
import Navbar from "../components/navbar";
import Nigeria from "naija-state-local-government";

const IndividualForm = () => {
  const [submitProcessing, setSubmitProcessing] = useState(false);
  const states = Nigeria.states();

  const [lgas, setLGAS] = React.useState([]);

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
    <Form.Item name="mobile_prefix" noStyle>
      <Select style={{ width: 90 }}>
        <Select.Option value="+234">+234</Select.Option>
      </Select>
    </Form.Item>
  );

  const handleNigeriaStateChange = (value) => {
    setLGAS(Nigeria.lgas(value).lgas);
  };

  const onSubmit = (values) => {
    setSubmitProcessing(true);
  };

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Navbar />
      <div className="flex justify-center min-h-screen bg-gray-50">
        <div className="min-h-80 w-11/12 sm:w-8/12 bg-white my-24 lg:rounded-lg drop-shadow-lg shadow-green-dark">
          <div className="w-full h-full flex items-center flex-col">
            <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 w-full h-full mb-4  border-b border-gray-300">
              <h3 className="text-center font-bold text-lg sm:text-2xl">INDIVIDUAL REGISTRATION</h3>
              <ul className=" list-inside list-disc text-xs m-0 w-full">
                <li>This form is meant to register single students</li>
                <li>Fill in the correct and most recent information</li>
                <li>
                  Click on the <span className="font-bold">&quot;Make Payment&quot;</span> button to make registration payment and have information submitted
                </li>
                <li>
                  Registration for each student is <span className="font-bold">N3000 (Three Thousand Naira Only )</span>
                </li>
                <li>Ensure you have the total sum for the number of students available in an account where it can be transferred when needed</li>
              </ul>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 w-full h-full mb-4 ">
              <h3 className="text-center w-full text-lg">School Information</h3>
              <Form
                name="individual_signup"
                className="w-full"
                onFinish={onSubmit}
                {...formItemLayout}
                initialValues={{
                  mobile_prefix: "+234",
                }}
              >
                <div className="grid grid-cols-2  sm:grid-cols-4 gap-4">
                  <Form.Item
                    name="state"
                    label="State"
                    labelAlign="left"
                    rules={[
                      {
                        required: true,
                        message: "Please Select your state!",
                      },
                    ]}
                  >
                    <Select onChange={handleNigeriaStateChange}>
                      {states.map((state) => (
                        <Select.Option key={state} value={state}>
                          {state}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="lga"
                    label="LG"
                    labelAlign="left"
                    rules={[
                      {
                        required: true,
                        message: "Please Select your Local Government Area!",
                      },
                    ]}
                  >
                    <Select>
                      {lgas.map((lga) => (
                        <Select.Option key={lga} value={lga}>
                          {lga}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item name="ward" label="Ward" labelAlign="left">
                    <Input type="text" />
                  </Form.Item>
                  <Form.Item
                    name="category"
                    label="Category"
                    labelAlign="left"
                    rules={[
                      {
                        required: true,
                        message: "Please Select your Category!",
                      },
                    ]}
                  >
                    <Select placeholder="select your gender">
                      <Select.Option value="9">Primary</Select.Option>
                      <Select.Option value="9">Secondary</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
                  <Form.Item
                    name="school_name"
                    label="School's Name"
                    labelAlign="left"
                    rules={[
                      {
                        required: true,
                        message: "Please Select your School Name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="school_head"
                    label="School's Head:"
                    labelAlign="left"
                    rules={[
                      {
                        required: true,
                        message: "Please Select your School Head!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item name="mobile" label="Mobile No:" labelAlign="left" rules={[{ required: true, message: "Please input your phone number!" }]}>
                    <Input addonBefore={prefixSelector} />
                  </Form.Item>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <Form.Item
                    name="school_address"
                    label="School's Address:"
                    labelAlign="left"
                    rules={[
                      {
                        required: true,
                        message: "Please Select your School Head!",
                      },
                    ]}
                  >
                    <Input placeholder="School Address" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    labelAlign="left"
                    label="School Email:"
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
                    <Input type="email" placeholder="Email" />
                  </Form.Item>
                </div>
                <Divider className="m-0"></Divider>
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
                    name="parent_number"
                    labelAlign="left"
                    label="Parent No:"
                    rules={[
                      {
                        required: true,
                        message: "Parent's number!",
                      },
                    ]}
                  >
                    <Input placeholder="Parent's Number" />
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
                  <Button loading={submitProcessing} type="primary" htmlType="submit" className={` py-2 flex-1 ${submitProcessing ? "w-full" : "w-8/12"} `}>
                    Make Payment
                  </Button>
                  <Button type="primary" style={{ display: submitProcessing && "none" }} htmlType="reset" className="py-2 w-3/12 float-right">
                    Clear
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualForm;
