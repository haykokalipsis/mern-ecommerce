import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {Button, Card, Col, Image, ListGroup, Row} from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";

const Product = (props) => {
	const [product, setProduct] = useState({});

	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/products/${props.match.params.id}`);
			setProduct(data);
		};

		fetchProduct();
	}, [props.match]);

    return (
        <>
			<Link to='/' className="btn btn-light my-3">Go Back</Link>
			<Row>
				<Col md={6}>
					<Image fluid src={product.image} alt={product.name}  />
				</Col>

				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>

						<ListGroup.Item>
							<Rating value={product.rating} text={`${product.numReviews} reviews`} />
						</ListGroup.Item>

						<ListGroup.Item>
							Price: ${product.price}
						</ListGroup.Item>

						<ListGroup.Item>
							Description: ${product.description}
						</ListGroup.Item>
					</ListGroup>
				</Col>

				<Col md={3}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col><strong>{product.price}</strong></Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Status:</Col>
									<Col><strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong></Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Button className='btn-block' type='button' disabled={product.countInStock < 1}>Add To Cart</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
    )
}

export default Product
