import { maxPageSize } from './constants';

const ALL_KEY_FILES_API = 'http://localhost:8080/api/keysfiles';
const ALL_KEY_FILES_WITHOUT_PAGINATION_API = 'http://localhost:8080/api/keysfiles?page=0&pageSize=' + maxPageSize;
const STORE_KEY_FILES_API = 'http://localhost:8080/api/keysfiles/uploadMultipleFiles';
const DELETE_KEY_FILES_API = 'http://localhost:8080/api/keysfiles/update/';
const DOWNLOAD_KEY_FILES_API = 'http://localhost:8080/api/keysfiles/downloadFile/'


export {
    ALL_KEY_FILES_API,
    ALL_KEY_FILES_WITHOUT_PAGINATION_API,
    STORE_KEY_FILES_API,
    DELETE_KEY_FILES_API,
    DOWNLOAD_KEY_FILES_API
const SAVE_WALLET_API = 'http://localhost:8080/api/wallets';
const WALLET_PDF_API = 'http://localhost:8080/api/wallets/pdf';

export {
    SAVE_WALLET_API,
    WALLET_PDF_API
}