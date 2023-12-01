// Worked
// 1. GET
// 2. POST
// 3. Next() Pre-Handler
// 4. Router

// Have to workout
// 1. Query Param => const { age } = request.query;

import { Router } from 'express';
import { db } from '../db/index.js'

const router = Router();

// router.post('/', (request, response) => {
//     console.log("Body--", request.body);
//     personList.push(request.body);
//     response.status(200).send("all ok");
// })

router.post('/', (request, response) => {
    let persons = '';
    for (let i = 0; i < request.body.length; i++) {
        persons.concat('("')
        persons.concat(request.body[1].name)
        persons.concat(')')
    }
    // request.body.map((item) => {
    //     db.query(`insert into persons (name, age) values (${item.name}, ${item.age});`)
    // })
    response.status(200).send("Persons Added Sucessfully")
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

// router.get('/:name', (request, response) => {
//     const { name } = request.params;
//     const person = personList.filter((item) => item.name == name);
//     response.status(200).send(person)
// })

export default router; 