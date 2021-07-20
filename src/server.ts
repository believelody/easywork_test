import express from 'express';
import config from './config';
import { doc } from './lib/spreadsheet';
import studentsRoute from './routes/students';

const app = express();

/** Routes go here */
app.use('/api/students', studentsRoute);

/** Error handling */
app.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});


app.listen(config.server.port, async () => {
    await doc.useApiKey(config.server.gSpreadSheetKey);
    return `Server is running ${config.server.hostname}:${config.server.port}`
});
