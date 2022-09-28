const Expense = require('../models/expense');

exports.getExpense = (req, res, next) => {
  Expense.findAll()
  .then(expense => {
    console.log(expense)
    console.log("Hello your expenses are",expense)
    res.status(200).json({data:expense})
  })
  .catch(err=>console.log(err));
};

exports.postExpense = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const purpose = req.body.purpose;
  console.log(purpose)
  const amount= req.body.amount;
  Expense.create({
    amount: amount,
    Purpose: purpose,
    email: email,
    name: name
 })    .then(result => {
       console.log(result);
      console.log('Created expense');
      res.json("expense created")
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
};

exports.deleteExpense =(req,res,next) => {
    const id = req.params.id;
    Expense.findByPk(id)
    .then(item=>{
    item.destroy();
    })
    .then(result=>{
    console.log(result);
    res.json("expense deleted")
    })
    .catch(err=>console.log(err));

};