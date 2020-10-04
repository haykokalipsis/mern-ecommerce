import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';

import Home from './pages/Home';
import Product from './pages/Product';

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/' component={Home} exact/>
					<Route path='/product/:id' component={Product}/>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
