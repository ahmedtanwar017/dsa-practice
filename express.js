const express = require("express")
const app  = express();
port = 3000

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from a directory
app.use(express.static('public'));

app.get('/',(req,res) => {
   res.send("Hello World")
})

app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// Respond to GET request on the /about route
app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/student/:name', (req, res) => {
    res.send("Hello " + req.params.name);
});

app.get('/users/:userId/books/:bookId', (req, res) => {
  // Access parameters using req.params
  res.send(`User ID: ${req.params.userId}, Book ID: ${req.params.bookId}`);
});

app.get('/search', (req, res) => {
    res.send(req.query);
});

app.get('/items', (req, res) => {
    const category = req.query.category;
    const price = req.query.price;

    res.send(`Category: ${category}, Price: ${price}`);
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});