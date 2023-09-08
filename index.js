const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const {data} = req.body;
    console.log(req.body);
    let numb = []
    let alpha = []
    data.forEach(item => {
        if (!isNaN(item)) {
          numb.push(String(item));
        } else if (/^[A-Za-z]+$/.test(item)) {
          alpha.push(item);
        }
      });
      const highest = alpha.reduce((highest, current) => {
        const lowerCurrent = current.toLowerCase();
        const lowerHighest = highest.toLowerCase();
      
        if (lowerCurrent > lowerHighest) {
          return current;
        } else {
          return highest;
        }
      }, '');
    const response = {
      is_sucess: 'true',
      user_id:'ritik_shrivastava_28082002',
      college_email:'rs5492@srmist.edu.in',
      roll_number:'RA2011051010008',
      numbers:numb,
      alphabets:alpha,
      highestAlphabet:highest
    };
  
    res.json(response);
  });
  
  app.get('/bfhl', (req, res) => {
    const operationCode = Math.floor(Math.random() * 1000);
  
    const response = {
      operation_code: operationCode,
    };
  
    res.json(response);
  });
  
app.listen(3000, function () {
    console.log("Server is running on 3000");
});