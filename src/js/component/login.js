import React from "react";
import "../../styles/login.scss";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const Login = () => {
	return (
		<>
			<Container fluid>
				<Row>
					<Col>
						<Card className="cardLogin" bg="light">
							<Card.Header as="h5">Log in</Card.Header>
							<Card.Body>
								<Card.Text>
									<Form>
										<Form.Group controlId="formBasicEmail">
											<Form.Label>Email address</Form.Label>
											<Form.Control type="email" placeholder="Enter email" />
											<Form.Text className="text-muted">
												{"We'll never share your email with anyone else."}
											</Form.Text>
										</Form.Group>
										<Form.Group controlId="formBasicPassword">
											<Form.Label>Password</Form.Label>
											<Form.Control type="password" placeholder="Password" />
										</Form.Group>
										<Button variant="outline-dark" className="loginButton font-weight-bolder">
											Submit
										</Button>
									</Form>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default Login;
