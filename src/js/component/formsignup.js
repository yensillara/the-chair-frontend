import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Card, Button, Form, ModalFooter } from "react-bootstrap";

export const FormSignup = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const professionalRegister = {
		full_name: "",
		email: "",
		password: "",
		phone: "",
		profession: "",
		location: "",
		description: ""
	};
	const [signup, setSignup] = useState(professionalRegister);

	function changeSignUp(e) {
		setSignup({
			...signup,
			[e.target.name]: e.target.value
		});
		e.preventDefault();
	}

	const saveSignUp = async e => {
		e.preventDefault();
		console.log(signup);
		let success = await actions.professionalRegister(signup);
		if (success) {
			console.log("Successful Sign up");
			history.push("/professionals");
		} else {
			console.log("Sign up failed");
		}
	};

	return (
		<React.Fragment>
			<Card className="cardSignup" border="dark" bg="transparent">
				<Card.Body>
					<Card.Text>
						<Form>
							<Form.Group controlId="Form.ControlInput1">
								<Form.Label>Full Name</Form.Label>
								<Form.Control
									name="full_name"
									type="fullName"
									placeholder="full name"
									onChange={changeSignUp}
								/>
							</Form.Group>
							<Form.Group controlId="Form.ControlInput2">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									name="email"
									type="email"
									placeholder="name@example.com"
									onChange={changeSignUp}
								/>
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									name="password"
									type="password"
									placeholder="Password"
									onChange={changeSignUp}
								/>
							</Form.Group>
							<Form.Group controlId="Form.ControlSelect1">
								<Form.Label>Profession</Form.Label>
								<Form.Control name=" profession" as="select" custom onChange={changeSignUp}>
									<option>Choose One</option>
									<option>Architect</option>
									<option>Interior Designer</option>
									<option>Architects Office</option>
									<option>Interior Design Office</option>
								</Form.Control>
							</Form.Group>
							<Form.Group controlId="Form.ControlInput3">
								<Form.Label>Phone Number</Form.Label>
								<Form.Control
									name="phone"
									type="phone"
									placeholder="314-674-5443"
									onChange={changeSignUp}
								/>
							</Form.Group>
							<Form.Group controlId="Form.ControlInput4">
								<Form.Label>Location</Form.Label>
								<Form.Control
									name="location"
									type="direction"
									placeholder="Caracas, Venezuela"
									onChange={changeSignUp}
								/>
							</Form.Group>
							<Form.Group controlId="descriptionForm.ControlTexdescription">
								<Form.Label>Style Description</Form.Label>
								<Form.Control name="description" as="textarea" rows={3} onChange={changeSignUp} />
							</Form.Group>
						</Form>
					</Card.Text>
				</Card.Body>
			</Card>
			<ModalFooter className="footerRegister">
				<Button
					variant="outline-dark"
					id="registerPro"
					className="styleButton font-weight-bolder"
					onClick={saveSignUp}>
					Register
				</Button>
			</ModalFooter>
		</React.Fragment>
	);
};
export default FormSignup;
