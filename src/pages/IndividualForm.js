import React, { useEffect, useState } from "react";
import { Form, Divider, Steps } from "antd";
import Navbar from "../components/navbar";
import Nigeria from "naija-state-local-government";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../actions/registration";
import { FormWrapper } from "../components/FormWrapper";
import { FormItem } from "../components/FormItem";
import * as FormRules from "../constants/formRules";
import { SelectItem } from "../components/SelectItem";
import { SubmitButton } from "../components/SubmitButton";
import { dataFormatter } from "../utils/dataFormatter";
import { formItemLayout } from "../constants/formItemLayout";
import { MobilePrefixSelector } from "../components/MobilePrefixSelector";
import { billing, processsRegistration } from "../actions/billing";
import { useNavigate } from "react-router-dom";

const IndividualForm = () => {
  const { pricePerStudent } = useSelector((state) => state.user);
  const [submitProcessing, setSubmitProcessing] = useState(false);
  const states = Nigeria.states();
  const [lgas, setLGAS] = React.useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNigeriaStateChange = (value) => {
    setLGAS(Nigeria.lgas(value).lgas);
  };

  const onSubmit = (values) => {
    setSubmitProcessing(true);
    const data = dataFormatter("single", values);
    console.log(data);
    dispatch(registration(data));
    dispatch(billing({ amount: pricePerStudent, numberOfStudent: 1, name: values.school_name, email: values.school_email, phonenumber: values.school_mobile_suffix }));
    setTimeout(() => navigate("/checkout"), 500);
  };

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    dispatch(registration({}));
    dispatch({
      type: "SERVER_REGISTRATION_RESPONSE",
      payload: {
        data: false,
      },
    });
    dispatch(billing({}));
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <FormWrapper header="INDIVIDUAL REGISTRATION" type="single">
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
            <FormItem name="category" label="Age Category" rule={FormRules.schoolCategoryFormRule}>
              <SelectItem
                dataMap={[
                  { value: "primary", label: "7-11" },
                  { value: "secondary", label: "12-16" },
                ]}
              />
            </FormItem>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
            <FormItem name="school_name" label="School's Name:" rule={FormRules.scholeNameFormRule} />
            <FormItem name="school_head" label="School's Head:" rule={FormRules.scholeHeadFormRule} />
            <FormItem name="school_mobile_suffix" maxLength={11} label="Mobile No:" rule={FormRules.schoolMobileFormRule} addonBefore={<MobilePrefixSelector name="school_mobile_prefix" />} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <FormItem name="school_address" label="School's Address:" rule={FormRules.schoolAddressFormRule} />
            <FormItem name="school_email" label="School Email:" rule={FormRules.schoolEmailFormRule} type="email" />
          </div>
          <Divider className="m-0"></Divider>
          <h3 className="text-center w-full text-lg">Student Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <FormItem name="student_name" label="Student's Name:" rule={FormRules.studentNameFormRule} />
            <FormItem name="student_age" label="Student's Age:" rule={FormRules.studentAgeFormRule} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <FormItem name="parent_name" label="Parent's Name:" rule={FormRules.parentNameFormRule} />
            <FormItem name="parent_mobile_suffix" label="Parent No:" maxLength={11} rule={FormRules.parentMobileSuffixFormRule} addonBefore={<MobilePrefixSelector name="parent_mobile_prefix" />} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mb-6">
            <FormItem name="parent_address" label="Parent's Address:" rule={FormRules.parentAddressFormRule} />
            <FormItem name="parent_email" label="Parent Email:" rule={FormRules.parentEmailFormRule} type="email" />
          </div>

          <SubmitButton submitProcessing={submitProcessing} />
        </Form>
      </FormWrapper>
    </>
  );
};

export default IndividualForm;
