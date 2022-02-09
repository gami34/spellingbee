import { Popconfirm } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const studentTableColumn = (tableData, handleStudentEdit, handleStudentDelete) => {
  return [
    {
      title: "Student's Name",
      dataIndex: "student_name",
      width: 80,
      key: "student_name",
      fixed: "left",
    },
    {
      title: "Student's Age",
      dataIndex: "student_age",
      key: "student_age",
    },
    {
      title: "Parent's Name",
      dataIndex: "parent_name",
      key: "parent_name",
    },
    {
      title: "Parent's Address",
      dataIndex: "parent_address",
      key: "parent_address",
    },
    {
      title: "Parent's No",
      dataIndex: "parent_number",
      key: "parent_number",
    },
    {
      title: "Parent's Email",
      dataIndex: "parent_email",
      key: "parent_email",
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
};
