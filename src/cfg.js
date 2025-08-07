const path = require('path');
const cfgdef = require('aframework/cfgdef');
const aiServiceSet = require('./cfgset');
const cfg = cfgdef();
//----------------------------------------------------------------
const nodeModulesPath = path.join(__dirname, "..", 'node_modules');
cfg.nodeModulesPath = nodeModulesPath; // ejs 页面里面使用了这个路径
//----------------------------------------------------------------
cfg.app.name = 'user_service';
cfg.loadContextFilePath = path.join(__dirname, 'loadcontext.js');
cfg.genFolder = path.join(__dirname, 'gen');
cfg.typeJsFolder = __dirname;
cfg.autowire.folders = [
    __dirname,
];
//----------------------------------------------------------------
cfg.web.port = 3014;
cfg.web.view.viewFolder = require('./web/views/viewfolder');
//----------------------------------------------------------------
cfg.mysql.database = 'ai_service';
cfg.mysql.serverTimezone = 'Asia/Shanghai';
//----------------------------------------------------------------
aiServiceSet(cfg);
//----------------------------------------------------------------
module.exports = cfg;
