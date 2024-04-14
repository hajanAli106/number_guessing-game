#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([{
        message: "geuss a number between 1-6",
        type: "number",
        name: "gessedNumber",
    }]);
if (answers.gessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number.");
}
else {
    console.log("you geussed wrong number");
}
