import React from "react";

export const RegistrationDirection = ({ header, type }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 w-full h-full mb-4  border-b border-gray-300">
      <h3 className="text-center font-bold text-lg sm:text-2xl uppercase">{header}</h3>
      <ul className=" list-inside list-disc text-xs m-0 w-full">
        <li>{`This form is meant to register ${type} students`}</li>
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
  );
};
