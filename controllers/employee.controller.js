const Employee = require("../models/employee.model");

// exports.test = (req, res) => {
//     res.send('Greetins From the Test Controller')
// }

exports.create = (req, res) => {
  //Validate Request
  //   if (!req.body.content) {
  //     return res.status(400).send({
  //       message: "Employee content can not be empty"
  //     });
  //   }

  //Create Employee
  //employee is an instantiate Employee model
  const employee = new Employee({
    name: req.body.name || "Untitled name",
    email: req.body.email || "Untitled email",
    city: req.body.city || "Untitled city"
  });

  //Save note in the Database
  employee
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the employee."
      });
    });
};

//Retrieve and return all employees from the database
exports.findAll = (req, res) => {
  Employee.find()
    .then(employees => {
      res.send(employees);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees."
      });
    });
};

//Find a single employee with a employeeID
exports.findOne = (req, res) => {
  Employee.findById(req.params.employeeId)
    .then(employee => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found with id: " + req.params.employeeId
        });
      }
      res.send(employee);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId
        });
      }
      return res.status(500).send({
        message: "Error retrieving employee with id " + req.params.employeeId
      });
    });
};

//Update a employee identified by the employeeId in the request
exports.update = (req, res) => {
  //Validate Request
  //   if (!req.body.content) {
  //     return res.status(400).send({
  //       message: "Employee content can not be empty"
  //     });
  //   }

  //Find employee and update it
  Employee.findByIdAndUpdate(
    req.params.employeeId,
    {
      name: req.body.name || "Untitled name update",
      email: req.body.email,
      city: req.body.city
    },
    { new: true }
  )
    .then(employee => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found with id: " + req.params.employeeId
        });
      }

      res.send(employee);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Employee not found with id: " + req.params.employeeId
        });
      }

      return res.status(500).send({
        message: "Error updating employee with id: " + req.params.employeeId
      });
    });
};

//Delete a Employee with the specified employeeId in the request
exports.delete = (req, res) => {
  Employee.findByIdAndRemove(req.params.employeeId)
    .then(employee => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId
        });
      }

      //   res.send({
      //     message: "Employee Deleted successfuly!"
      //   });
      res.json(employee);
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId
        });
      }
      return res.status(500).send({
        message: "Could not delete employee with id " + req.params.employeeId
      });
    });
};
