const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8081;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let answerHistory = [];

// {
//    operator: 'add'|'subtract'|'multiply'|divide,
//    num1: Number,
//    num2: Number
// }
app.post('/calculate', (req, res) => {
   // req.body.operator
   // req.body.num1
   // req.body.num2
   const { operator, num1, num2 } = req.body;

   let answer;
   let strOperator;

   if (operator === 'add') {
      answer = Number(num1) + Number(num2);
      strOperator = '+';
   } else if (operator === 'subtract') {
      answer = Number(num1) - Number(num2);
      strOperator = '-';
   } else if (operator === 'multiply') {
      answer = Number(num1) * Number(num2);
      strOperator = '*';
   } else {
      answer = Number(num1) / Number(num2);
      strOperator = '/';
   }

   // answerHistory.push(answer)
   answerHistory = [
      ...answerHistory,
      `${num1} ${strOperator} ${num2} = ${answer}`,
   ];

   res.sendStatus(201);
});

app.get('/history', (req, res) => {
   res.json({ answerHistory });
});

app.delete('/delete', (req, res) => {
   // reset answer history
   answerHistory = [];

   res.json({ answerHistory });
});

app.listen(PORT, () => {
   console.log(`Server running server on port ${PORT}`);
});
