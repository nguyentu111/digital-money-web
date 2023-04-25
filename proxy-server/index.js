const express = require('express')
const cors = require('cors')
const axios = require('axios')
var bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const port = 4000
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.post('/login', async (req, res) => {
  axios
    .post('https://project.ewallet.vn/e-wallet/public/api/login', {
      phone_number: req.body.phone_number,
      password: req.body.password
    })
    .then((response) => {
      return res.status(response.status).json(response.data)
    })
    .catch((error) => {
      return res.status(error.response.status).json(error.response.data)
    })
})
app.post('/register', async (req, res) => {
  axios
    .post('https://project.ewallet.vn/e-wallet/public/api/register', {
      name: req.body.name,
      phone_number: req.body.phone_number,
      checked: true,
      password: req.body.password,
      password_confirmation: req.body.password_confirmation,
      address: req.body.address,
      dob: req.body.dob
    })
    .then((response) => {
      return res.status(response.status).json(response.data)
    })
    .catch((error) => {
      return res.status(error.response.status).json(error.response.data)
    })
})
app.get('/all-linked-bank/:phone_number', async (req, res) => {
  axios
    .get('https://project.ewallet.vn/e-wallet/public/api/link-bank-account/' + req.params.phone_number, {
      headers: {
        Accept: 'application/json',
        Authorization: req.headers.authorization
      }
    })
    .then((response) => {
      return res.status(response.status).json(response.data)
    })
    .catch((error) => {
      return res.json(error)
    })
})
app.get('/all-banks', async (req, res) => {
  axios
    .get('https://project.ewallet.vn/e-wallet/public/api/get-banks', {
      headers: {
        Accept: 'application/json',
        Authorization: req.headers.authorization
      }
    })
    .then((response) => {
      return res.status(response.status).json(response.data)
    })
    .catch((error) => {
      return res.json(error)
    })
})
// app.post("/add-card", async (req, res) => {
//   console.log("asdsadasd");
//   axios
//     .post(
//       "https://project.ewallet.vn/e-wallet/public/api/link-bank-account",
//       {
//         phone_number: "0987123123",
//         bank_account_number: 1111222233334452,
//         bank_id: 1,
//       },
//       {
//         headers: {
//           Accept: "application/json",
//           Authorization: "Bearer 180|YEOsI7svGuf2n2ppjSX0QtLG5fwVCKTAABFzbAMs",
//         },
//       }
//     )
//     .then((response) => {
//       return res.status(response.status).json(response.data);
//     })
//     .catch((error) => {
//       return res.json(error);
//     });
// });
app.get('/trans-history/:phone_number', async (req, res) => {
  axios
    .get('https://project.ewallet.vn/e-wallet/public/api/payments/get-payments/' + req.params.phone_number, {
      headers: {
        Accept: 'application/json',
        Authorization: req.headers.authorization
      }
    })
    .then((response) => {
      return res.status(response.status).json(response.data)
    })
    .catch((error) => {
      return res.json(error.response.data)
    })
})
app.post('/trans-to-bank', async (req, res) => {
  console.log(req.body) // test
  axios
    .post(
      'https://project.ewallet.vn/e-wallet/public/api/payments/transfer-to-bank-account',
      {
        phone_number_source: req.body.phone_number_source,
        money: req.body.money,
        bank_id: req.body.bank_id,
        bank_account_des: req.body.bank_account_des,
        note: req.body.note
      },
      {
        headers: {
          Authorization: req.headers.authorization,
          'Content-Type': 'application/json'
        }
      }
    )
    .then((response) => {
      return res.status(response.status).json(response.data)
    })
    .catch((error) => {
      return res.status(error.response.status).json(error.response.data)
    })
})
app.post('/trans-to-wallet', async (req, res) => {
  axios
    .post(
      'https://project.ewallet.vn/e-wallet/public/api/payments/transfer-another-ewallet',
      {
        phone_number_source: req.body.phone_number_source,
        phone_number_des: req.body.phone_number_des,
        money: req.body.money,
        note: req.body.note
      },
      {
        headers: {
          Authorization: req.headers.authorization,
          'Content-Type': 'application/json'
        }
      }
    )
    .then((response) => {
      return res.status(response.status).json(response.data)
    })
    .catch((error) => {
      return res.status(error.response.status).json(error.response.data)
    })
})
app.get('/get-balance/:phone_number', (req, res) => {
  axios
    .get('https://project.ewallet.vn/e-wallet/public/api/get-balance/' + req.params.phone_number, {
      headers: {
        Accept: 'application/json',
        Authorization: req.headers.authorization
      }
    })
    .then((response) => {
      return res.status(response.status).json(response.data)
    })
    .catch((error) => {
      return res.json(error.response.data)
    })
})
app.post('/deposit-money', (req, res) => {
  axios
    .post(
      'https://project.ewallet.vn/e-wallet/public/api/payments/deposit-money',
      {
        linked_id: req.body.linked_id,
        money: req.body.money,
        phone_number_des: req.body.phone_number_des,
        note: req.body.note
      },
      {
        headers: {
          Accept: 'application/json',
          Authorization: req.headers.authorization
        }
      }
    )
    .then((response) => {
      if (response.data.status === 'fail') response.status = 400
      console.log(response.data)
      return res.status(response.status).json(response.data)
    })
    .catch((error) => {
      return res.json(error.response.data)
    })
})
app.delete('/delete-card/:id', (req, res) => {
  axios
    .delete('https://project.ewallet.vn/e-wallet/public/api/link-bank-account/' + req.params.id, {
      headers: {
        Accept: 'application/json',
        Authorization: req.headers.authorization
      }
    })
    .then((response) => {
      console.log(response.status, response.data, req.params.id)
      return res.status(response.status).json(response.data)
    })
    .catch((error) => {
      return res.json(error.response.data)
    })
})
app.post('/add-card', (req, res) => {
  axios
    .post(
      'https://project.ewallet.vn/e-wallet/public/api/link-bank-account',
      {
        ...req.body
      },
      {
        headers: {
          Accept: 'application/json',
          Authorization: req.headers.authorization
        }
      }
    )
    .then((response) => {
      return res.status(response.status).json(response.data)
    })
    .catch((error) => {
      return res.json(error.response)
    })
})
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})
