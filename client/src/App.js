import React, {Fragment} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';
import Home from './pages/Home';

const App = () => {
	return (
		<Fragment>
			<Header />
			<main className='py-3'>
				<Container>
					<Home />
				</Container>
			</main>
			<Footer />
		</Fragment>
	);
}

export default App;
