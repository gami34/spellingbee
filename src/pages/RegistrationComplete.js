import React, { useEffect, memo } from "react";
import { useSelector } from "react-redux";
import { Steps } from "antd";
import { Navigate } from "react-router-dom";

const RegistrationComplete = () => {
  const { backEndRegistrationStatus } = useSelector((state) => state.user);

  useEffect(() => {}, [location.pathname]);
  return (
    <>
      {backEndRegistrationStatus ? (
        <div className="h-screen bg-gray-400 flex items-center justify-center overflow-hidden">
          <div className="mim-w-80 m-6 w-full sm:w-6/12 min-h-80 rounded shadow-lg shadow-green-dark  bg-gray-50">
            <h3 className="h-12 mt-4 bg-yellow-400 shadow-lg flex justify-between pl-6 items-center">
              <span className="text-lg font-bold">NAPPS SpellingBee</span>
              <img className="w-24 h-24 -mr-4 rounded-full shadow-lg shadow-gray-600" src="/images/cb1.jpeg" alt="" />
            </h3>
            <div className="p-6 overflow-hidden">
              <Steps size="small" current={2}>
                <Steps.Step title="Finished" subTitle="School Information Registration." />
                <Steps.Step title="Finished" subTitle="Payment." />
              </Steps>
              <h3 className=" text-2xl font-extrabold text-green-dark text-center">Registration Is Now Complete</h3>
              <h4 className="text-center">Registration ID: </h4>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default memo(RegistrationComplete);
