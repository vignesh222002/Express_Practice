// Express
// PORT
// Listen
// Specify Request Body Type

import express from 'express';
const app = express();
const PORT = 4000;

import personRoutes from './routes/persons.js';
import {db} from "./db/index.js"

app.use(express.json())

app.use('/api/persons', personRoutes);

db.connect((err) => {
    if (err) {
        console.log("Mysql connection error", err);
    }
    else {
        console.log("Mysql connected Sucessfully")
    }
});

app.get('/error', (request, response) => {
    throw new Error('broken');
})

app.listen(PORT, () => console.log(`Server is listening in Port ${PORT}`));