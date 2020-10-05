import express from 'express';
import Product from '../models/Product.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get(
	'/',
	asyncHandler(async (request, response) => {
		const products = await Product.find({});
		response.json(products);
	})
);

// @desc Fetch a single product
// @route GET /api/products/:id
// @access Public
router.get(
	'/:id',
	asyncHandler(async (request, response) => {
		const product = await Product.findById(request.params.id);

		if (product) {
			response.json(product);
		} else {
			// response.status(404).json({message: 'Product not found'});
			response.status(404);
			throw new Error('Product not found');
		}
	})
);

export default router;