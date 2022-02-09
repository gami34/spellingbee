import React from "react";
import { RegistrationDirection } from "./RegistrationDirection";

export const FormWrapper = ({ children, header, type }) => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="min-h-80 w-11/12 sm:w-8/12 bg-white my-24 lg:rounded-lg drop-shadow-lg shadow-green-dark">
        <div className="w-full h-full flex items-center flex-col">
          <RegistrationDirection header={header} type={type} />
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 w-full h-full mb-4 ">
            <h3 className="text-center w-full text-lg">School Information</h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
