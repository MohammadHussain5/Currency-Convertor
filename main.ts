import chalk from "chalk";
import inquirer from "inquirer";

// Currency Convertor

const output = await inquirer.prompt({
  name: "one",
  type: "list",
  message: chalk.white.bold(
    "Which currency do you want to convert into another currency?"
  ),
  choices: [chalk.cyan("USD"), chalk.yellow("PKR"), chalk.green("Dihram")],
});

if (output.one === chalk.cyan("USD")) {
  const output1 = await inquirer.prompt({
    name: "one1",
    type: "list",
    message: chalk.white(
      "Okay, So which currency do you want to convert USD into?"
    ),
    choices: [chalk.yellow("PKR"), chalk.green("Dihram")],
  });

  const output1_0 = await inquirer.prompt({
    name: "two",
    type: "number",
    message: chalk.white("Enter the amount"),
  });

  if (output1.one1 === chalk.yellow("PKR")) {
    console.log(
      `${output1_0.two} USD into PKR =`,
      chalk.yellow(output1_0.two * 278.45)
    );
  } else if (output1.one1 === chalk.green("Dihram")) {
    console.log(
      `${output1_0.two} USD into Dihram =`,
      chalk.green(output1_0.two * 3.67)
    );
  }
} else if (output.one === chalk.yellow("PKR")) {
  const output2 = await inquirer.prompt({
    name: "one2",
    type: "list",
    message: chalk.white(
      "Okay, So which currency do you want to convert PKR into?"
    ),
    choices: [chalk.cyan("USD"), chalk.green("Dihram")],
  });

  const output1_1 = await inquirer.prompt({
    name: "two",
    type: "number",
    message: chalk.white("Enter the amount"),
  });

  if (output2.one2 === chalk.cyan("USD")) {
    console.log(
      `${output1_1.two} PKR into USD =`,
      chalk.cyan(output1_1.two * 0.0036)
    );
  } else if (output2.one2 === chalk.green("Dihram")) {
    console.log(
      `${output1_1.two} PKR into Dihram =`,
      chalk.green(output1_1.two * 0.013)
    );
  }
} else if (output.one === chalk.green("Dihram")) {
  const output3 = await inquirer.prompt({
    name: "one3",
    type: "list",
    message: chalk.white(
      "Okay, So which currency do you want to convert Dihram into?"
    ),
    choices: [chalk.cyan("USD"), chalk.yellow("PKR")],
  });

  const output1_2 = await inquirer.prompt({
    name: "two",
    type: "number",
    message: chalk.white("Enter the amount"),
  });

  if (output3.one3 === chalk.cyan("USD")) {
    console.log(
      `${output1_2.two} Dihram into USD =`,
      chalk.cyan(output1_2.two * 0.27)
    );
  } else if (output3.one3 === chalk.yellow("PKR")) {
    console.log(
      `${output1_2.two} Dihram into PKR =`,
      chalk.yellow(output1_2.two * 75.81)
    );
  }
}
