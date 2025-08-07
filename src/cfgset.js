const aiServiceSet = (cfg) => {
    cfg.llm = {
        bailian: {
            baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
            apiKey: process.env.APP_LLM_BAILIAN_API_KEY || 'sk-',
            // model: 'qwen-plus',
            useProxy: false,
            model: 'qwen-turbo-latest',
            proxyUrl: 'http://127.0.0.1:7890',
            maxToken: 8000,
        },
        volcengine: {
            baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
            apiKey: process.env.APP_LLM_VOLCENGINE_API_KEY || 'sk-',
            // model: 'qwen-plus',
            useProxy: false,
            model: 'qwen-turbo-latest',
            proxyUrl: 'http://127.0.0.1:7890',
        },
    }
}


module.exports = aiServiceSet;
