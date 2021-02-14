import React, { useState } from "react";
import "../../styles/signup.scss";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const FormSignup = () => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<Card bg="secondary">
							<Card.Header as="h5">Sign up</Card.Header>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
									<Form>
										<Form.Group controlId="exampleForm.ControlInput1">
											<Form.Label>Email address</Form.Label>
											<Form.Control type="email" placeholder="name@example.com" />
										</Form.Group>
										<Form.Group controlId="exampleForm.ControlSelect1">
											<Form.Label>Profession</Form.Label>
											<Form.Control as="select">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</Form.Control>
										</Form.Group>
										<Form.Group controlId="descriptionForm.ControlTexdescription">
											<Form.Label>Description</Form.Label>
											<Form.Control as="textdescription" rows={3} />
										</Form.Group>
									</Form>
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default FormSignup;
