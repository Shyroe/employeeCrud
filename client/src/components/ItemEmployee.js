import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const ItemEmployee = ({ emp, deleteEmp, editEmp }) => {
  return (
    // <div>
    <tr>
      <td>{emp.name}</td>
      <td>{emp.email}</td>
      <td>{emp.city}</td>
      <td>
        <a className="text-success" onClick={() => editEmp(emp._id)} href="#">
          <FaEdit />
        </a>
        <a className="text-danger" onClick={() => deleteEmp(emp._id)} href="#">
          <FaTrashAlt />
        </a>
      </td>
    </tr>
    // </div>
  );
};

export default ItemEmployee;
