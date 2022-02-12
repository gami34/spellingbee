import React, { useEffect, memo, useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { flutterwaveConfigGenerator } from "../utils/flutterwaveConfig.generator";
import { useSelector, useDispatch } from "react-redux";
import { Button, Steps } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { processsRegistraton } from "../actions/billing";

const CheckOut = () => {
  const { billing } = useSelector((state) => state.user);

  const [processing, setProcessing] = useState(false);
  const config = flutterwaveConfigGenerator(billing && billing.amount, { name: billing && billing.name, email: billing && billing.email, phonenumber: billing && billing.phonenumber });
  const handleFlutterPayment = useFlutterwave(config);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onPaymentConfirmation = () => {
    setProcessing(true);
    handleFlutterPayment({
      callback: (response) => {
        dispatch(processsRegistraton(response));
        // navigate("/thankYou");
        closePaymentModal(); // this will close the modal programmatically
        navigate("/registrationcomplete");
      },
      onClose: () => {
        // dispatch(processsRegistraton({}));
        console.log("payment modal now closed");
      },
    });
  };

  useEffect(() => {}, [location.pathname]);
  return (
    <>
      {billing ? (
        <div className="h-screen bg-gray-400 flex items-center justify-center overflow-hidden">
          <div className="mim-w-80 m-6 w-full sm:w-6/12 min-h-80 rounded shadow-lg shadow-green-dark  bg-gray-50">
            <h3 className="h-12 mt-4 bg-yellow-400 shadow-lg flex justify-between pl-6 items-center">
              <span className="text-lg font-bold">SpellingBee</span>
              <Link className="w-24 h-24 -mr-4 rounded-full shadow-lg shadow-gray-600" to="/">
                <img className="w-24 h-24 -mr-4 rounded-full shadow-lg shadow-gray-600" src="/images/cb1.jpeg" alt="" />
              </Link>
            </h3>
            <div className="p-6 overflow-hidden">
              <Steps size="small" current={1}>
                <Steps.Step title="Finished" subTitle="School Information Registration." />
                <Steps.Step title="In Progress" subTitle="Payment." />
              </Steps>
              <div className="grid grid-cols-2  mt-6">
                <span className="text-right p-1 font-semibold text-lg">Number of Student:</span>
                <span className="text-left flex items-center pl-4">{billing.numberOfStudent}</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-right p-1 font-semibold text-lg">Amount:</span>
                <span className="text-left flex items-center pl-4">₦{billing.amount}</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-right p-1 font-semibold text-lg">School Name:</span>
                <span className="text-left flex items-center pl-4">{billing.name}</span>
              </div>
              <div className="grid grid-cols-2 mb-6">
                <span className="text-right p-1 font-semibold text-lg">School Email:</span>
                <span className="text-left flex items-center pl-4">{billing.email}</span>
              </div>
              <Button type="primary" loading={processing} className="w-full" onClick={onPaymentConfirmation} value="Pay Now">
                Pay Now
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default memo(CheckOut);
