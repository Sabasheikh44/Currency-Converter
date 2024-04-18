#! /usr/bin/env node
import inquirer from "inquirer";

let c_value: {[key: string]: number} = {
    PKR: 278.40,
    UAE: 3.67,
    USD: 1
}

let ans = await inquirer.prompt([{
    type: "list",
    name: "from",
    message: "Converting From",
    choices: ['PKR' , 'USD' , 'UAE']
},
{
    type: "list",
    name: "to",
    message: "Converting to",
    choices: ['PKR' , 'USD' , 'UAE']
},
{
    type: "number",
    name: "amount",
    message: "your amount to convert"
}

])

console.log(c_value[ans.to] / c_value[ans.from] *ans.amount);