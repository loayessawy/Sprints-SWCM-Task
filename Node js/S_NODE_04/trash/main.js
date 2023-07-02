const http = require('http')
const express = require('express')
const { nextTick } = require('process')
const app = express()
const port = 8080
const doGetData = require('./Fetch/Fetch-products');
const doPostCategorizeProducts = require('./Fetch/Fetch-products');

app.use(express.json());
// Get all users
app.get('/', async (req, res) => {
    const currencyQuery = req.query.CUR
    const newDate = await doGetData(currencyQuery);
    res.json(newDate);
});

// Create a new user
app.post('/', async (req, res) => {
    let users = [];
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
    console.log(user)
    await doPostCategorizeProducts(user)
});

// Update a user by ID
app.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;

    // Find the user by ID and update its properties
    users = users.map(user => {
        if (user.id === id) {
            return { ...user, ...updatedUser };
        }
        return user;
    });

    res.json(updatedUser);
});

// Delete a user by ID
app.delete('/:id', (req, res) => {
    const id = req.params.id;

    // Remove the user with the specified ID
    users = users.filter(user => user.id !== id);

    res.sendStatus(204);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

