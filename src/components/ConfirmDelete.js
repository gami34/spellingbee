import React from "react";
import { Modal } from "antd";

const ConfirmDelete = ({ show, setShow }) => {
  return (
    <Modal closable={true} destroyOnClose={true} footer={null} title="Delete" centered visible={show} onCancel={() => setShow(false)} className="w-10/12">
      <h3>Data Deleted Successfully</h3>
    </Modal>
  );
};

export default ConfirmDelete;
