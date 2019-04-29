const minimist = require("minimist");
const chalk = require("chalk");

module.exports = () => {
  const args = minimist(process.argv.slice(2));

  let cmd = args._[0] || "help";

  if (args.version || args.v) {
    cmd = "version";
  }

  if (args.help || args.h) {
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
