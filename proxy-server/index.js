const express = require("express");
const cors = require("cors");
const axios = require("axios");
var bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const port = 4000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.post("/login", async (req, res) => {
  axios
    .post("https://project.ewallet.vn/e-wallet/public/api/login", {
      phone_number: req.body.phone_number,
      password: req.body.password,
    })
    .then((response) => {
      return res.status(response.status).json(response.data);
    })
    .catch((error) => {
      return res.status(error.response.status).json(error.response.data);
    });
});
app.post("/register", async (req, res) => {
  axios
    .post("https://project.ewallet.vn/e-wallet/public/api/register", {
      name: req.body.name,
      phone_number: req.body.phone_number,
      checked: req.body.checked,
      password: req.body.password,
      password_confirmation: req.body.password_confirmation,
      address: req.body.address,
      dob: req.body.dob,
    })
    .then((response) => {
      return res.status(response.status).json(response.data);
    })
    .catch((error) => {
      return res.status(error.response.status).json(error.response.data);
    });
});
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
