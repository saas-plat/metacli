const {Command, flags} = require('@oclif/command')

class AddCommand extends Command {
  async run() {
    const {flags} = this.parse(AddCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from D:\\dev\\github\\metacli\\src\\commands\\add.js`)
  }
}

AddCommand.description = `add model`

CreateCommand.args = [{
  name: 'type',
  name: 'name'
}];

AddCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = AddCommand
