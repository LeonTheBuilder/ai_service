const loadContext = require('../../../../loadcontext');

it('baiLianFile.uploadFile', async () => {

    const a = await loadContext();
    // --------
    const baiLianFile = a.beans.baiLianFile;
    const args = {
        filePath: '/Users/chence/dev/ai_service/gen/apistub.gen.js',
    }
    // --------
    const ret = await baiLianFile.uploadFile(args);
    console.log(ret);
    // ---------
    await baiLianFile.deleteFile({fileId: ret});

    process.exit(0);
}).timeout(100000);
