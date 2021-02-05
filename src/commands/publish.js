const {Command, flags} = require('@oclif/command')

class PublishCommand extends Command {
  async run() {
    const {flags} = this.parse(PublishCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from D:\\dev\\github\\metacli\\src\\commands\\publish.js`)
  }
}

PublishCommand.description = `publish project new version`

PublishCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = PublishCommand
