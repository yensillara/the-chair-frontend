import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const Login = () => {
	return (
		<>
			<Card className="cardLogin" border="dark" bg="transparent">
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
						</Form>
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};
export default Login;
