const minimist = require("minimist");
const chalk = require("chalk");
const ora = require("ora");

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const spinner = ora().start();

  setTimeout(() => {
    spinner.stop();
  }, 3000);

  let cmd = args._[0] || "help";

  if (args.version || args.v) {
    cmd = "version";
  }

  if (args.help || args.h) {
    cmd = "help";
  }

  switch (cmd) {
    case "today":
      require("./cmds/today.js")(args);
      break;
    case "version":
      require("./cmds/version.js")(args);
      break;
    case "help":
      require("./cmds/help.js")(args);
      break;
    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
};
