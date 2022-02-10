import React, { useEffect, useState } from "react";
import { Form, Button, Divider, Table, Steps } from "antd";
import Navbar from "../components/navbar";
import { PlusCircleOutlined } from "@ant-design/icons";
import Nigeria from "naija-state-local-government";
import AddStudentModal from "../components/AddStudentModal";
import ConfirmDelete from "../components/ConfirmDelete";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../actions/registration";
import { FormWrapper } from "../components/FormWrapper";
import { studentTableColumn } from "../constants/studentTableColumn";
import { FormItem } from "../components/FormItem";
import { SelectItem } from "../components/SelectItem";
import * as FormRules from "../constants/formRules";
import { MobilePrefixSelector } from "../components/MobilePrefixSelector";
import { SubmitButton } from "../components/SubmitButton";
import { formItemLayout } from "../constants/formItemLayout";
import { billing } from "../actions/billing";
import { useNavigate } from "react-router-dom";
import { dataFormatter } from "../utils/dataFormatter";

const MultipleForm = () => {
  const [submitProcessing, setSubmitProcessing] = useState(false);
  const states = Nigeria.states();

  const [lgas, setLGAS] = React.useState([]);
  const [tableData, setTableData] = React.useState([]);
  const [record, setRecord] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [addStudentFormvisible, setAddStudentFormVisible] = React.useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);

  const navigate = useNavigate();

  const { pricePerStudent } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleStudentEdit = (record) => {
    setRecord(record);
    setAddStudentFormVisible(true);
  };

  const onStudentEdit = (editedData) => {
    const dataIndex = tableData.findIndex((data) => data.key === record.key);
    tableData.splice(dataIndex, 1, {
      key: record.key,
      parent_address: editedData.parent_address,
      parent_email: editedData.parent_email,
      parent_name: editedData.parent_name,
      parent_number: editedData.parent_mobile_prefix + editedData.parent_mobile_suffix === 11 ? editedData.parent_mobile_suffix.slice(1, 10) : editedData.parent_mobile_suffix,
      student_age: editedData.student_age,
      student_name: editedData.student_name,
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
    const data = dataFormatter("multiple", { ...values, students: tableData });
    dispatch(registration(data));
    dispatch(billing({ amount: pricePerStudent * tableData.length, numberOfStudent: tableData.length, name: values.school_name, email: values.school_email, phonenumber: values.school_mobile_suffix }));
    setTimeout(() => navigate("/checkout"), 500);
  };

  const onStudentSubmit = (values) => {
    tableData.push({
      key: tableData.length + 1,
      student_name: values.student_name,
      student_age: values.student_age,
      parent_name: values.parent_name,
      parent_address: values.parent_address,
      parent_number: values.parent_mobile_prefix + values.parent_mobile_suffix === 11 ? values.parent_mobile_suffix.slice(1, 10) : values.parent_mobile_suffix,
      parent_email: values.parent_email,
    });
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
      <FormWrapper header="Multiple Registration" type="multiple">
        <Steps size="small" current={0} style={{ marginBottom: "50px", marginTop: "30px" }}>
          <Steps.Step title="In Progress" subTitle="School Information Registration." />
          <Steps.Step title="Pending" subTitle="Payment." />
        </Steps>
        <Form
          name="individual_signup"
          className="w-full"
          onFinish={onSubmit}
          {...formItemLayout}
          initialValues={{
            parent_mobile_prefix: "+234",
            school_mobile_prefix: "+234",
          }}
        >
          <div className="grid grid-cols-2  sm:grid-cols-4 gap-4">
            <FormItem name="state" label="State" rule={FormRules.schoolStateFormRule}>
              <SelectItem onChange={handleNigeriaStateChange} dataMap={states} />
            </FormItem>
            <FormItem name="lga" label="LGA" rule={FormRules.schoolLGAFormRule}>
              <SelectItem dataMap={lgas} />
            </FormItem>
            <FormItem name="ward" label="Ward" type="text" />
            <FormItem name="category" label="Category" rule={FormRules.schoolCategoryFormRule}>
              <SelectItem dataMap={["primary", "secondary"]} />
            </FormItem>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
            <FormItem name="school_name" label="School's Name:" rule={FormRules.scholeNameFormRule} />
            <FormItem name="school_head" label="School's Head:" rule={FormRules.scholeHeadFormRule} />
            <FormItem name="school_mobile_suffix" label="Mobile No:" rule={FormRules.schoolMobileFormRule} addonBefore={<MobilePrefixSelector name="school_mobile_prefix" />} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <FormItem name="school_address" label="School's Address:" rule={FormRules.schoolAddressFormRule} />
            <FormItem name="school_email" label="School Email:" rule={FormRules.schoolEmailFormRule} type="email" />
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
              <Table scroll={{ x: "max-content" }} rowSelection={rowSelection} columns={studentTableColumn(tableData, handleStudentEdit, handleStudentDelete)} dataSource={[...tableData]} />;
            </div>
          </div>
          <SubmitButton submitProcessing={submitProcessing} />
        </Form>
      </FormWrapper>
    </>
  );
};

export default MultipleForm;
