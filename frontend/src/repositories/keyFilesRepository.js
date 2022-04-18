import { ALL_KEY_FILES_API } from "../config";
import { ALL_KEY_FILES_WITHOUT_PAGINATION_API } from "../config";
import request from "../util/utils";

export const keyFilesService = {

    fetchKeyFiles: async () => {
        return await request({
            url: ALL_KEY_FILES_API,
            method: 'GET'
        });
    },
    fetchKeyFilesWithoutPagination: async () => {
        return await request({
            url: ALL_KEY_FILES_WITHOUT_PAGINATION_API,
            method: 'GET'
        });
    }
};