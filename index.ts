#! /usr/bin/env node
import inquirer from "inquirer";

// 1) computer will generote a random number

// 2) user input for guessing number

// 3) compare user input with computer generated number and show result

const randamNumber = Math.floor(Math.random() * 10 +1);

const answers = await inquirer.prompt([
    {
          name: "userGuessedNumber",
          type: "number",
          message: "please guess a number between 1-10:",
    },
]);
if(answers.userGuessedNumber == randamNumber){
    console.log("congratulations! you guessed right number.")

}else{
    console.log("You guessed wrong number");
}
