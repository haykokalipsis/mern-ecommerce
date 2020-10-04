const express = require('express');
const products = require('./data/products');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.get('/', (request, response) => {
	response.send('API is running');
});

app.get('/api/products', (request, response) => {
	response.json(products);
});

app.get('/api/products/:id', (request, response) => {
	const product = products.find((p) => {
		return p._id === request.params.id;
	})
	response.json(product);
});


const PORT = process.env.PORT | 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));