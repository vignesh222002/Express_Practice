// Worked
// 1. GET
// 2. POST
// 3. Next() Pre-Handler
// 4. Router

// Have to workout
// 1. Query Param => const { age } = request.query;

import { Router } from 'express';
import {db} from '../db/index.js'

const router = Router();

const personList = [
    {
        name: 'Vignesh',
        age: 21,
    },
    {
        name: 'Viki',
        age: 22,
    },
    {
        name: 'Perumal',
        age: 23,
    },
]

router.get('/',
    (request, response, next) => {
        console.log("Before Response")
        next()
    },
    (request, response, next) => {
        response.send(personList)
    }
)

router.post('/', (request, response) => {
    console.log("Body--", request.body);
    personList.push(request.body);
    response.status(200).send("all ok");
})

router.get('/all', (request, response) => {
    db.query('SELECT * FROM persons', (err, result) => {
        if (err) {
            console.log("Error in Mysql", err)
            response.status(500).send(err)
        }
        else {
            console.log("Result: ", result)
            response.json(result)
        }
    })
})

router.get('/:name', (request, response) => {
    const { name } = request.params;
    const person = personList.filter((item) => item.name == name);
    response.status(200).send(person)
})

export default router; 