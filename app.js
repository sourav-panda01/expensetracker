const path = require('path');
const cors=require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const sequelize = require('./util/database');
const errorController = require('./controllers/error');
const expenseRoutes = require('./routes/expense');
app.use(expenseRoutes);
app.use(errorController.get404);
sequelize
  .sync()
  .then(result => {
    console.log("express listening");
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
