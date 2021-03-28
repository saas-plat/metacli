metacli
=======

metaschema dev cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/metacli.svg)](https://npmjs.org/package/metacli)
[![Downloads/week](https://img.shields.io/npm/dw/metacli.svg)](https://npmjs.org/package/metacli)
[![License](https://img.shields.io/npm/l/metacli.svg)](https://github.com/https://github.com/saas-plat/metacli/https://github.com/saas-plat/metacli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g metacli
$ metacli COMMAND
running command...
$ metacli (-v|--version|version)
metacli/1.0.0 win32-x64 node-v10.15.3
$ metacli --help [COMMAND]
USAGE
  $ metacli COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g metacli
$ metacli COMMAND
running command...
$ metacli (-v|--version|version)
metacli/1.0.0 win32-x64 node-v10.15.3
$ metacli --help [COMMAND]
USAGE
  $ metacli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`metacli create [NAME]`](#metacli-create-name)
* [`metacli help [COMMAND]`](#metacli-help-command)
* [`metacli publish`](#metacli-publish)
* [`metacli voucher`](#metacli-voucher)

## `metacli create [NAME]`

create module from metastarter

```
USAGE
  $ metacli create [NAME]

OPTIONS
  -f, --force=force  overlay existing folder
```

_See code: [src/commands/create.js](https://github.com/saas-plat/metacli/blob/v1.0.0/src/commands/create.js)_

## `metacli help [COMMAND]`

display help for metacli

```
USAGE
  $ metacli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

## `metacli publish`

publish project new version

```
USAGE
  $ metacli publish

OPTIONS
  -n, --name=name  name to print
```

_See code: [src/commands/publish.js](https://github.com/saas-plat/metacli/blob/v1.0.0/src/commands/publish.js)_

## `metacli voucher`

Describe the command here

```
USAGE
  $ metacli voucher

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/voucher.js](https://github.com/saas-plat/metacli/blob/v1.0.0/src/commands/voucher.js)_
<!-- commandsstop -->
* [`metacli hello`](#metacli-hello)
* [`metacli help [COMMAND]`](#metacli-help-command)

## `metacli hello`

Describe the command here

```
USAGE
  $ metacli hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/saas-plat/metacli/https://github.com/saas-plat/metacli/blob/v1.0.0/src/commands/hello.js)_

## `metacli help [COMMAND]`

display help for metacli

```
USAGE
  $ metacli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_
<!-- commandsstop -->
