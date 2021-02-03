const { Command, flags } = require("@oclif/command");

class InitCommand extends Command {
  async run() {
    const { flags } = this.parse(InitCommand);

  }
}

InitCommand.description = `Describe the command here
...
Extra documentation goes here
`;

InitCommand.flags = {
  name: flags.string({ char: "n", description: "name to print" }),
};

module.exports = InitCommand;
