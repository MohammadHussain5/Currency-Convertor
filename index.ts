// TODO-LIST

import inquirer from "inquirer";
import chalk from "chalk";


let Mytodos= [];
let condition = true;
while (condition) 
{
const input= await inquirer.prompt([{
    name:"Question1", type:"input", message:(chalk.whiteBright.bold("What would you like to add in your todos?"))
},
{
    name:"Question2", type:"confirm", message:(chalk.whiteBright.bold("Would You like to add more in your todos?")), default:false
}])
Mytodos.push(input.Question1)

console.log(chalk.white("Your Todo list:"));


Mytodos.forEach(todos=> {

    console.log(chalk.yellow(`             ${todos} `)); //13 
    
});

condition=input.Question2;
}
