// Express
// PORT
// Listen
// Specify Request Body Type

const express = require('express');
const app = express();
const PORT = 4000;

const personRoutes = require('./routes/persons');


app.use(express.json())

app.use('/api/persons', personRoutes);

app.get('/error', (request, response) => {
    throw new Error('broken');
})

app.listen(PORT, () => console.log(`Server is listening in Port ${PORT}`));