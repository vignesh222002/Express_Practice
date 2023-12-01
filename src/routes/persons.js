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

router.post('/', (request, response) => {
    let persons = request.body.map((item) => `("${item.name}",${item.age})`).join(",");
    console.log("Persons query", persons);
    db.query(`insert into persons (name, age) values ${persons};`)
    response.status(200).send("Persons Added Sucessfully")
})

router.put('/', async (request, response) => {
    await request.body.forEach(item => {
        db.query(`update persons set name = "${item.name}", age = "${item.age}" where id = ${item.id}`, (err, result) => {
            if (err) {
                console.log("Error in Mysql", err)
                response.status(500).send(err)
            }
            else {
                response.status(200).send("Updated")
            }
        })
    })
    // db.query('select * form persons', (err, result) => {
    //     if (err) {
    //         console.log("Error in Mysql", err)
    //         response.status(500).send(err)
    //     }
    //     else {
    //         console.log("Result: ", result)
    //         response.json(result)
    //     }
    // })
})


// router.get('/:name', (request, response) => {
//     const { name } = request.params;
//     const person = personList.filter((item) => item.name == name);
//     response.status(200).send(person)
// })

export default router; 