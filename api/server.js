import express from 'express';
import dotenv from 'dotenv';

// Middlewares
import { notFound, errorHandler} from "./middlewares/errorMiddleware.js";

// Routes
import productRotes from './routes/productRoutes.js';

// Configs
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

// Routes=======================================================
app.use('/api/products', productRotes);

app.get('/', (request, response) => {
	response.send('API is running');
});

// Error Handling===============================================
// 404
app.use(notFound);
// Error | 500
app.use(errorHandler);

// Listen=======================================================
const PORT = process.env.PORT | 5000;
app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);