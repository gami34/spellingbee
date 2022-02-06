import React, { useEffect, useState } from "react";
import { Form, Input, Button, Divider, Select, Table, Popconfirm, Modal } from "antd";
import Navbar from "../components/navbar";
import { PlusCircleOutlined } from "@ant-design/icons";
import Nigeria from "naija-state-local-government";
import AddStudentModal from "../components/AddStudentModal";
import ConfirmDelete from "../components/ConfirmDelete";
import { Link } from "react-router-dom";

const MultipleForm = () => {
  const [submitProcessing, setSubmitProcessing] = useState(false);
  const states = Nigeria.states();

  const [lgas, setLGAS] = React.useState([]);
  const [tableData, setTableData] = React.useState([]);
  const [record, setRecord] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [addStudentFormvisible, setAddStudentFormVisible] = React.useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);

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

  const handleStudentEdit = (record) => {
    setRecord(record);
    setAddStudentFormVisible(true);
  };
  const onStudentEdit = (editedData) => {
    const dataIndex = tableData.findIndex((data) => data.key === record.key);
    tableData.splice(dataIndex, 1, {
      key: record.key,
      p_address: editedData.parent_address,
      p_email: editedData.parent_email,
      p_name: editedData.parent_name,
      p_no: editedData.parent_number,
      s_age: editedData.student_age,
      s_name: editedData.student_name,
    });
    setTableData(tableData);
    setRecord({});
    setAddStudentFormVisible(false);
  };
  const handleStudentDelete = (Recordkey) => {
    const dataIndex = tableData.findIndex((data) => data.key === Recordkey);
    tableData.splice(dataIndex, 1);
    setTableData(tableData);
    setShow(true);
  };
  const columns = [
    {
      title: "Student's Name",
      dataIndex: "s_name",
      width: 80,
      key: "s_name",
      fixed: "left",
    },
    {
      title: "Student's Age",
      dataIndex: "s_age",
      key: "s_age",
    },
    {
      title: "Parent's Name",
      dataIndex: "p_name",
      key: "p_name",
    },
    {
      title: "Parent's Address",
      dataIndex: "p_address",
      key: "p_address",
    },
    {
      title: "Parent's No",
      dataIndex: "p_no",
      key: "p_no",
    },
    {
      title: "Parent's Email",
      dataIndex: "p_email",
      key: "p_email",
      width: 80,
    },
    {
      title: "Actions",
      dataIndex: "operation",
      render: (_, record) =>
        tableData.length >= 1 ? (
          <span className="flex gap-x-4">
            <Link to="#" className="text-green-dark" onClick={() => handleStudentEdit(record)}>
              Edit
            </Link>
            <Popconfirm className="text-red-500" title="Sure to delete?" onConfirm={() => handleStudentDelete(record.key)}>
              <Link to="#">Delete</Link>
            </Popconfirm>
          </span>
        ) : null,
    },
  ];

  const prefixSelector = (
    <Form.Item name="mobile_prefix" noStyle>
      <Select style={{ width: 90 }}>
        <Select.Option value="+234">+234</Select.Option>
      </Select>
    </Form.Item>
  );
  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleNigeriaStateChange = (value) => {
    setLGAS(Nigeria.lgas(value).lgas);
  };

  const onSubmit = (values) => {
    setSubmitProcessing(true);
  };
  const onStudentSubmit = (values) => {
    tableData.push({ key: tableData.length + 1, s_name: values.student_name, s_age: values.student_age, p_name: values.parent_name, p_address: values.parent_address, p_no: values.parent_number, p_email: values.parent_email });
    setTableData(tableData);
    setAddStudentFormVisible(false);
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
          <div className="w-full flex items-center flex-col">
            <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 w-full mb-4  border-b border-gray-300">
              <h3 className="text-center font-bold text-lg sm:text-2xl">MULTIPLE REGISTRATION</h3>
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
            <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 w-full">
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
                <ConfirmDelete show={show} setShow={setShow} />
                <div className="flex flex-col md:flex-row gap-x-2 gap-y-4 md:gap-y-0 w-full">
                  <div className="w-full md:w-3/12 text-xs">
                    <Button type="primary" className="w-full text-xs" onClick={() => setAddStudentFormVisible(true)} icon={<PlusCircleOutlined />}>
                      Add Student
                    </Button>
                    <AddStudentModal record={{ ...record }} setRecord={setRecord} addStudentFormvisible={addStudentFormvisible} setAddStudentFormVisible={setAddStudentFormVisible} onStudentEdit={onStudentEdit} onStudentSubmit={onStudentSubmit} />
                  </div>
                  <div className="w-full md:w-9/12 float-right">
                    <Table scroll={{ x: "max-content" }} rowSelection={rowSelection} columns={columns} dataSource={[...tableData]} />;
                  </div>
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

export default MultipleForm;
