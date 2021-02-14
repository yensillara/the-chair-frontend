import React, { useState } from "react";
import "../../styles/signup.scss";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

export const FormSignup = () => {
	return (
		<React.Fragment>
			<Container>
				<Row>
					<Col>
						<Card className="cardSignup" bg="light">
							<Card.Header as="h5">Sign up</Card.Header>
							<Card.Body>
								<Card.Text>
									<Form>
										<Form.Group controlId="Form.ControlInput1">
											<Form.Label>Full Name</Form.Label>
											<Form.Control type="fullName" placeholder="full name" />
										</Form.Group>
										<Form.Group controlId="Form.ControlInput2">
											<Form.Label>Email address</Form.Label>
											<Form.Control type="email" placeholder="name@example.com" />
										</Form.Group>
										<Form.Group controlId="Form.ControlSelect1">
											<Form.Label>Profession</Form.Label>
											<Form.Control as="select">
												<option>Architect</option>
												<option>Interior Designer</option>
												<option>Architects Office</option>
												<option>Interior Design Office</option>
											</Form.Control>
										</Form.Group>
										<Form.Group controlId="Form.ControlInput3">
											<Form.Label>Phone Number</Form.Label>
											<Form.Control type="phone" placeholder="314-674-5443" />
										</Form.Group>
										<Form.Group controlId="Form.ControlInput4">
											<Form.Label>Direction</Form.Label>
											<Form.Control type="direction" placeholder="Caracas, Venezuela" />
										</Form.Group>
										<Form.Group controlId="descriptionForm.ControlTexdescription">
											<Form.Label>Style Description</Form.Label>
											<Form.Control as="textarea" rows={3} />
										</Form.Group>
									</Form>
								</Card.Text>
								<Button variant="outline-dark" className="loginButton font-weight-bolder">
									Submit
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
};
