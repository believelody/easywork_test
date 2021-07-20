import express from 'express';
import { GoogleSpreadsheetRow } from 'google-spreadsheet';
import fetch from 'node-fetch';
import config from '../config';
import { doc } from '../lib/spreadsheet';

interface Student {
    title: string,
    completed: boolean,
    id: number
};

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        await doc.loadInfo();
        const sheetStudents = doc.sheetsByIndex[0];
        const rows: GoogleSpreadsheetRow[] = await sheetStudents.getRows();
        const students = await rows.reduce(async (acc: Promise<Student[]>, row: GoogleSpreadsheetRow) => {
            const accumulator = await acc;
            if (row['Home State'] === 'NY') {
                const studentRes = await fetch(config.server.todosUrl, {
                    method: 'POST',
                    body: JSON.stringify({
                        title: row['Class Level'].includes('Freshman') ? `Accueillir ${row['Student Name']}` : `Réintégrer ${row['Student Name']}`,
                        completed: false
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });
                const student = await studentRes.json();
                accumulator.push(student);
            }
            return accumulator;
        }, Promise.resolve([]));
        res.status(200).json({ students });

    } catch (error) {
        console.log(error)
    }
});

export = router;
