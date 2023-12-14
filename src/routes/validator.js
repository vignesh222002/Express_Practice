// Express Validator

// use escape() for escape from HTML elements.

import { Router } from 'express';
import { body, checkExact, query, validationResult } from 'express-validator';

const router = Router();

router.get('/hello',
    body('person').notEmpty().escape(),
    body('email').custom(value => {
        if (value !== 'test@test.com') {
            console.log("first")
            throw new Error('E-mail is incorrect')
        }
        else return true
    }),
    (request, response) => {

        const validateResult = validationResult(request)
        if (validateResult.isEmpty()) {
            return response.status(200).send(`hello, ${request.body.person}!, ${request.body.email}`)
        }

        return response.status(500).send({ error: validateResult.array() })
    })

export default router;