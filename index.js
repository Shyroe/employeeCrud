const express = require("express");
const app = express();
const cors = require("cors");

require("./models/db"); //Import database connection

const bodyParser = require("body-parser");

const PORT = 3000;

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cors
const corsOptions = {
  origin: "http://localhost:1234",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

//Import Routes
const employeesRouter = require("./routes/employee.route");

// Import Routes
app.use("/", employeesRouter);

app.listen(PORT, () => {
  console.log("Servidor em execução na porta: ", PORT);
});
