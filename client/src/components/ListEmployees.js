import React from "react";

import { Table } from "react-bootstrap";

import ItemEmployee from "./ItemEmployee";

const ListEmployees = ({ employees, editEmp, deleteEmp }) => {
  return (
    <div className="wrap">
      <Table className="mt-5" striped bordered hover variant="info">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <ItemEmployee
              key={emp._id}
              emp={emp}
              editEmp={editEmp}
              deleteEmp={deleteEmp}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListEmployees;
