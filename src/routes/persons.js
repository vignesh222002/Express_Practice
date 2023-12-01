// Worked
// 1. GET
// 2. POST
// 3. Next() Pre-Handler
// 4. Router

// Have to workout
// 1. Query Param => const { age } = request.query;

const { Router } = require('express');

const router = Router()

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

router.get('/:name', (request, response) => {
    const { name } = request.params;
    const person = personList.filter((item) => item.name == name);
    response.status(200).send(person)
})

router.post('/', (request, response) => {
    console.log("Body--", request.body);
    personList.push(request.body);
    response.status(200).send("all ok");
})

module.exports = router;