const express = require('express'),
      app     = express()

app.get('/', (req, res) => {
    res.send("Marshian Software LLC")
})

app.get('/home', (req, res) => {
    res.send("Home Page")
})

app.get('/about', (req, res) => {
    res.send("About Page")
})

app.get('/blog', (req, res) => {
    res.send("Blog Page")
})

app.get('/contact', (req, res) => {
    res.send("Contact Page")
})

app.listen(3000, () => {
    console.log('Server listening on port 3000...')
})