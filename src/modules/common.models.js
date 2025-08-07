const AppCodeMessages = Object.freeze({
    taskRateLimit: {code: "taskRateLimit", message: 'taskRateLimit'},
});


const RequestTypes = Object.freeze({
    downloadUrl: 'downloadUrl',
    ingestSite: 'ingestSite'
});


const UserEventTypes = Object.freeze({
    siteCreated: 'siteCreated',
    //
    siteDownloadInit: 'siteDownloadInit',
    siteDownloadSuccess: 'siteDownloadSuccess',
    siteDownloadFail: 'siteDownloadFail',
    pageDownloading: 'pageDownloading',
    pageDownloaded: 'pageDownloaded',
    //
    extractSinglePageContents: 'extractSinglePageContents',
    extractCommonContentTasks: 'extractCommonContentTasks',
    executeCommonContentTask: 'executeCommonContentTask',
    extractApiContentTasks: 'extractApiContentTasks',
    executeApiContentTask: 'executeApiContentTask',
    //
    siteIngestSuccess: 'siteIngestSuccess',
    siteIngestFail: 'siteIngestFail',
});


const AppMessageQueues = Object.freeze({
    bizRequestQ: 'bizRequestQ',
});


module.exports = {
    AppCodeMessages,
    RequestTypes,
    UserEventTypes,
    AppMessageQueues,
};
