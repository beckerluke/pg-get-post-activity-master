const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const bookRouter = require('./routes/book.router.js'); // import book router

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/books', bookRouter);


app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});