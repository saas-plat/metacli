const { Command, flags } = require("@oclif/command");
const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const axios = require('axios');
const compressing = require('compressing');
const os = require('os');


class CreateCommand extends Command {

  async createReq() {
    const req = axios.create({
      baseURL: "https://github.com",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
    req.interceptors.request.use(
      async (config) => {
        console.log(config.method, config.url, config.data || '');
        return config;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
    req.interceptors.response.use(
      (res) => {
        // console.log(res.status);
        return res;
      },
      (error) => {
        if (error.response && error.response.status === 404) {
          return null;
        }
        console.log(error);
        return Promise.reject(error);
      }
    );

    return req;
  };



  async download(targetDir) {
    // 如果已经存在就不下载
    try {
      await fs.access(targetDir, fs.constants.F_OK);
      console.log(targetDir, 'exist, skip create new!')
      return targetDir;
    } catch (err) {
    }
    // 下载压缩包
    const req = await this.createReq();
    const res = await req.get(
      `/saas-plat/metastarter/archive/main.tar.gz`,
      {
        responseType: 'stream',
      }
    );
    if (!res) {
      console.log('zip not found!')
      return null;
    }

    // console.log('content-disposition:', res.headers['content-disposition']);
    // Content-Disposition: attachment; filename=xxxx-main.tar.gz
    const disposition = (res.headers['content-disposition'] || '').split(';');
    const filename = disposition.reduce(
      (ret, it) =>
        it.trim().startsWith('filename=')
          ? it.substr('filename='.length + 1).replace(/\"/g, '')
          : ret,
      null
    );
    if (!filename) {
      throw new Error('filename not found!');
    }
    const inputPath = os.tmpdir();
    const dirName = path.basename(filename, '.tar.gz');
    const tempDir = path.join(inputPath, dirName);
    await fs.emptyDir(tempDir);
    console.log('download to %s', tempDir);
    await compressing.tgz.uncompress(res.data, inputPath);
    console.log('save to %s', targetDir);
    await fs.remove(targetDir);
    await fs.ensureDir(path.dirname(targetDir));
    await fs.rename(tempDir, targetDir);
    return targetDir;
  };

  async run() {
    const { args, flags } = this.parse(CreateCommand);
    //console.log(args, flags) 
    await this.download(path.resolve(args.name));
  }
}

CreateCommand.description = `create module from metastarter`;

CreateCommand.args = [{
  name: 'name'
}];

CreateCommand.flags = {

};

module.exports = CreateCommand;
