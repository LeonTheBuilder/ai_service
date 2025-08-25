const loadContext = require('../../../../loadcontext');

it('bailianLlmTextClient.complete', async () => {

    const a = await loadContext();
    // -----------------------------------------------------
    const llmTextService = a.beans.llmTextService;
    const idgen = a.beans.idgen;
    const seed = await a.models.Sugar.randomDigits(10);
    const message = `
    请给我一个日本消失的三十年相关的话题。
要求：
1. 要求每次返回的内容不同，这是第${seed}次请求。
2. 以如下json格式返回
{'topic':'话题'}
   `;
    const args = {
        provider: 'bailian',
        params: {
            model: 'qwen-turbo',
            temperature: 1.8,
            messages: [
                {role: "user", content: message}
            ],
            enableSearch: false,
            maxToken: 16384,
        }
    };
    const resp = await llmTextService.complete(args);
    // 数字经济时代下的就业结构转型与挑战
    //
    console.info(resp.content);


    // -----------------------------------------------------
    process.exit(0);
}).timeout(100000);


it('qwenlong.fileTest', async () => {

    const a = await loadContext();
    // -----------------------------------------------------
    const llmTextService = a.beans.llmTextService;
    const idgen = a.beans.idgen;
    const seed = await a.models.Sugar.randomDigits(10);
    const message = `
    这个文件说的是什么
   `;
    const args = {
        provider: 'bailian',
        params: {
            model: 'qwen-turbo',
            temperature: 1.8,
            messages: [
                {role: "user", content: message}
            ],
            enableSearch: false,
            maxToken: 16384,
            _filePath: '/Users/chence/dev/ai_service/gen/bizExecutor.startWorkerForBizExecute.0.worker.gen.md'
        }
    };
    const resp = await llmTextService.complete(args);
    // 数字经济时代下的就业结构转型与挑战
    //
    console.info(resp.content);


    // -----------------------------------------------------
    process.exit(0);
}).timeout(100000);
