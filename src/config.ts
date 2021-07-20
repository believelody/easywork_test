import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;
const G_SPREADSHEET_KEY = process.env.G_SPREADSHEET_KEY || 'put your private api key';
const G_SPREADSHEET_URL = process.env.G_SPREADSHEET_URL || 'put your spreadsheet url';
const G_SERVICE_ACCOUNT = process.env.G_SERVICE_ACCOUNT || 'put your service account email';
const G_SPREADSHEET_ID = process.env.G_SPREADSHEET_ID || '';
const TODOS_SERVER_URL = process.env.TODOS_SERVER_URL || 'https://jsonplaceholder.typicode.com/todos';


const config = {
    server: {
        hostname: SERVER_HOSTNAME,
        port: SERVER_PORT,
        gSpreadSheetKey: G_SPREADSHEET_KEY,
        gServiceAccount: G_SERVICE_ACCOUNT,
        gSpreadSheetUrl: G_SPREADSHEET_URL,
        gSpreadSheetId: G_SPREADSHEET_ID,
        todosUrl: TODOS_SERVER_URL
    }
};

export default config;
