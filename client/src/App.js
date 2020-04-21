import React, { useState, useEffect } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import AddForm from "./components/AddForm";
import UpdateForm from "./components/UpdateForm";
import ListEmployees from "./components/ListEmployees";

import axios from "axios";

const App = () => {
  const [empForm, setEmpForm] = useState({
    id: null,
    name: "",
    email: "",
    city: ""
  });

  const [employees, setEmployees] = useState([]);
  // console.log('State employees', employees)

  const [editItem, setEditItem] = useState(false);

  // useEffect
  useEffect(() => {
    //getEmployees
    // let users = getEmployees().then(data => {
    //   console.log("data", data);
    //   return setEmployees([...data]);
    // });

    axios
      .get("http://localhost:3000/employees")
      .then(res => {
        console.log("Res: ", res.data);
        return setEmployees([...res.data]);
      })
      .catch(err => console.log("err", err));

    // console.log("Effect users: ", users);

    console.log("useEffect listEmp", employees);
  }, []);

  //Clear Form
  const clearFormEmp = () => {
    return setEmpForm({
      id: null,
      name: "",
      email: "",
      city: ""
    }); //clear
  };

  const handleChange = e => {
    setEmpForm({
      ...empForm,
      [e.target.name]: e.target.value
    });
  };

  //Add
  const handleSubmit = e => {
    e.preventDefault();

    const createEmp = {
      // id: new Date(),
      name: empForm.name,
      email: empForm.email,
      city: empForm.city
    };

    console.log("createEmp: ", createEmp);

    setEditItem(false);

    axios
      .post("http://localhost:3000/employees", createEmp)
      .then(res => {
        console.log("data: ", res);
        return setEmployees(state => [...state, res.data]);
      })
      .catch(err => console.error(err));

    // setEmployees(state => {
    //   return [...state, createEmp];
    // });
    //Clear form
    clearFormEmp();
    // console.log("Employees: ", employees);
  };

  //Delete
  const deleteEmp = id => {
    // const filteredItems = employees.filter(item => item.id != id);
    // setEmployees(filteredItems);

    axios
      .delete(`http://localhost:3000/employees/${id}`)
      .then(res => {
        console.log("delete: ", res.data);
        const selectedEmp = res.data;
        // console.log("SelectedEmp: ", selectedEmp);
        const filteredItems = employees.filter(
          item => item._id != selectedEmp._id
        );
        console.log("Filtered: ", filteredItems);

        return setEmployees([...filteredItems]);
      })
      .catch(err => console.error(err));
  };

  //Update
  const updateEmp = e => {
    e.preventDefault();
    // setEmployees([..., empForm]);

    const { id } = empForm;
    console.log("empForm id: ", id);

    const newEmp = {
      id: empForm.id,
      name: empForm.name,
      email: empForm.email,
      city: empForm.city
    };

    axios
      .put(`http://localhost:3000/employees/${id}`, newEmp)
      .then(res => {
        console.log("put data: ", res);
        return setEmployees(state => [...state, res.data]);
      })
      .catch(err => console.error(err));

    //Adicionar novo item para o array employees
    // setEmployees(state => [...state, empForm]);

    //Clear form
    clearFormEmp();
  };

  //Edit
  const editEmp = id => {
    setEditItem(true);

    const currentItem = employees.find(item => item._id == id);
    const filteredItems = employees.filter(item => item._id != id);

    //Remover item selecioando
    setEmployees([...filteredItems]);

    //Add currentItem to form
    setEmpForm({
      id: currentItem._id,
      name: currentItem.name,
      email: currentItem.email,
      city: currentItem.city
    });
  };

  return (
    <div>
      {editItem ? (
        <UpdateForm
          empForm={empForm}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          updateEmp={updateEmp}
        />
      ) : (
        <AddForm
          empForm={empForm}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      )}

      <ListEmployees
        deleteEmp={deleteEmp}
        editEmp={editEmp}
        employees={employees}
      />
    </div>
  );
};

export default App;
