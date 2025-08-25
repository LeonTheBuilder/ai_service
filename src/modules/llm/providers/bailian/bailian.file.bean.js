// import fs from "fs";
const fs = require('fs');

class BaiLianFile {

    async uploadFile(args) {
        const {
            filePath
        } = args;

        const client = this.bailianLlmTextClient.getClient();

        const fileObject = await client.files.create({
            file: fs.createReadStream(filePath),
            purpose: "file-extract"
        });
        this.log.info(fileObject);
        return fileObject.id;
    }

    async deleteFile(args) {
        const {
            fileId
        } = args;
        const client = this.bailianLlmTextClient.getClient();
        await client.files.delete(fileId);
    }


    async complete(args) {
        const {
            filePath,
            prompt,
            temperature = 0.7,
            max_tokens = 8000,
        } = args;
        const fileID = await this.getFileID({filePath});
        const response = await this.getClient().chat.completions.create({
            model: "qwen-long",
            messages: [
                {role: "system", content: `fileid://${fileID}`},
                {role: "user", content: prompt}
            ],
        });
        this.log.info('call bailian end');
        return response;
    }
}

module.exports = BaiLianFile;