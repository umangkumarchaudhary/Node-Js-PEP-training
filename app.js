// Function to create add and subtract API

const express = require('express');
const app = express();
app.use(express.json());

app.get('/add', (req, res) => {
    if (req.query.num1 == null || req.query.num1 == undefined || req.query.num1 == "") {
        console.log("Not a valid input");
        res.send({ error: "Please enter a valid input" });
    }
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const num3 = Number(req.query.num3);
    
    const sum = num1 + num2 + num3;
    console.log(sum);
    res.send({ sum });
});

app.get('/subtract', (req, res) => {
    if (req.body.num1 == null || req.body.num1 == undefined || req.body.num1 == "") {
        console.log("Not a valid input");
        res.send({ error: "Please enter a valid input" });
    }

    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);

    const subtract = num1 - num2;

    console.log(subtract);
    res.send({ subtract });
});

app.get('/addList',(req, res)=>{
    const num = req.query.Number;
    const numbers = num.split(",");
    console.log(numbers);
    let sum = 0;
    for(let i = 0; i< numbers.length; i++){
        sum += Number(numbers[i]);
    }
    res.send({ sum});
})
 // Change the port to 3002 or any other available port
app.listen(3002, () => {
    console.log(`Server is running on port 3002`);
}); 
