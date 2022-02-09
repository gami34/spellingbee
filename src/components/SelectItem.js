import React from "react";
import { Select } from "antd";

export const SelectItem = ({ onChange, dataMap }) => {
  return (
    <Select onChange={onChange}>
      {dataMap.map((data) => (
        <Select.Option key={data} value={data}>
          {data}
        </Select.Option>
      ))}
    </Select>
  );
};
