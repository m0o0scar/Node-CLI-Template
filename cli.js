#!/usr/bin/env node

const inquirer = require('inquirer');
const chalk = require('chalk');

async function main() {
  // use inquirer to collect user's input
  // https://www.npmjs.com/package/inquirer
  const answers = await inquirer.prompt([
    {type: 'input', name: 'name', message: 'What is your name?'},
    {type:'list', name: 'gender', message: 'What is your gender?', choices: ['female', 'male']},
  ]);

  // use chalk to print colorful logs
  // https://www.npmjs.com/package/chalk
  const title = answers.gender === 'female' ? chalk.bgRed.whiteBright('Ms.') : chalk.blue('Mr.');
  const name = chalk.bold(answers.name.charAt(0).toUpperCase() + answers.name.slice(1));
  console.log(`Hello ${title} ${name}`);
}

main();