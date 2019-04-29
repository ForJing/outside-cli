const minimist = require("minimist");

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  console.log(args);

  const cmd = args._[0];

  switch (cmd) {
    case "today":
      require("./cmds/today.js")(args);
      break;
    default:
      console.error(`"${cmd}" is not a valid command`);
      break;
  }
};
