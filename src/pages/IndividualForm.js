import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Divider, Select } from "antd";
import Navbar from "../components/navbar";
import Nigeria from "naija-state-local-government";
import { useDispatch } from "react-redux";
import { registration } from "../actions/registration";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { flutterwaveConfigGerator } from "../utils/flutterwaveConfig.generator";
import { FormWrapper } from "../components/FormWrapper";
import { FormItem } from "../components/FormItem";
import * as FormRules from "../constants/formRules";
import { SelectItem } from "../components/SelectItem";
import { SubmitButton } from "../components/SubmitButton";
import { dataFormatter } from "../utils/dataFormatter";
import { formItemLayout } from "../constants/formItemLayout";
import { MobilePrefixSelector } from "../components/MobilePrefixSelector";

const IndividualForm = () => {
  const [submitProcessing, setSubmitProcessing] = useState(false);
  const states = Nigeria.states();
  const [lgas, setLGAS] = React.useState([]);
  const [paymentConfig, setPaymentConfig] = React.useState(flutterwaveConfigGerator(3000, { name: "", email: "spellingbee@spellingbee.com", phonenumber: "" }));
  const [customerInfo, setCustomerInfo] = React.useState();
  const dispatch = useDispatch();

  const handlePayment = useFlutterwave(paymentConfig);
  console.log(handlePayment);

  const handleNigeriaStateChange = (value) => {
    setLGAS(Nigeria.lgas(value).lgas);
  };

  const onSubmit = (values) => {
    setSubmitProcessing(true);
    const data = dataFormatter("single", values);
    dispatch(registration(data));
    setCustomerInfo({ name: values.school_name, email: values.school_email, phonenumber: values.school_mobile_suffix });

    handlePayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal();
      },
      onClose: () => {},
    });
  };

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <FormWrapper header="INDIVIDUAL REGISTRATION" type="single">
        const [paymentModal, setPaymentModal] = React.useState(false);
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

          <SubmitButton submitProcessing={submitProcessing} />
        </Form>
      </FormWrapper>
    </>
  );
};

export default IndividualForm;
