const path = require('path');
const cfgdef = require('aframework/cfgdef');
const aiServiceSet = require('./cfgset');
const cfg = cfgdef();
//----------------------------------------------------------------
const nodeModulesPath = path.join(__dirname, "..", 'node_modules');
cfg.nodeModulesPath = nodeModulesPath; // ejs 页面里面使用了这个路径
//----------------------------------------------------------------
cfg.app.name = 'ai_service';
cfg.app.rootFolder = path.join(__dirname, '..');
cfg.autowire.folders = [
    __dirname,
];
//----------------------------------------------------------------
cfg.web.port = 3014;
//----------------------------------------------------------------
cfg.mysql.database = 'ai_service';
cfg.mysql.serverTimezone = 'Asia/Shanghai';
//----------------------------------------------------------------
aiServiceSet(cfg);
//----------------------------------------------------------------
module.exports = cfg;
