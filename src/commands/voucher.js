const {Command, flags} = require('@oclif/command')

class VoucherCommand extends Command {
  async run() {
    const {flags} = this.parse(VoucherCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from D:\\dev\\github\\metacli\\src\\commands\\voucher.js`)
  }
}

VoucherCommand.description = `add models by voucher template`

CreateCommand.args = [{ 
  name: 'name'
}];

VoucherCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = VoucherCommand
