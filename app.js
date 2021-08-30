const express = require('express'),
      path    = require('path'),
      app     = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('landing')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
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