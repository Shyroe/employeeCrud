const express = require("express");
const router = express.Router();

//Controller
// const employee_controller = require("../controllers/employee.controller");

const employees = require("../controllers/employee.controller.js");

// router.get("/test", employee_controller.test);

//Api employee model

router.get("/employees", employees.findAll);

router.get("/employees/:employeeId", employees.findOne);

router.post("/employees", employees.create);

router.delete("/employees/:employeeId", employees.delete);

router.put("/employees/:employeeId", employees.update);

module.exports = router;
