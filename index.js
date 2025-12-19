let express = require('express');
let app = express();    
let userRoutes = require('./routes/userRoutes');
let productRoutes = require('./routes/productRoutes');
let cartRoutes = require('./routes/cartRoutes');
let path = require('path');
let errorHandler = require('./utils/errorHandler');

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use(errorHandler);

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});