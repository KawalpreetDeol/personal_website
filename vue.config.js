const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const os = require('os');

module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config
      .plugin('fork-ts-checker')
      .tap(args => {
        let totalmem = Math.floor(os.totalmem() / 1024 / 1024); //get OS mem size
        let allowUseMem = totalmem > 2048 ? 4096 : 2048;
        // in vue-cli shuld args[0]['typescript'].memoryLimit
        args[0].memoryLimit = allowUseMem;
        args[0].workers = 2;
        return args
      })
  },
};
