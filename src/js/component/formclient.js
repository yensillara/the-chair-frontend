import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Card, Form, Button, ModalFooter } from "react-bootstrap";

export const FormClient = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const clientRegister = {
		full_name: "",
		email: "",
		phone: "",
		location: ""
	};

	const [signup, setSignUp] = useState(clientRegister);

	function changeSignUp(e) {
		setSignUp({
			...signup,
			[e.target.name]: e.target.value
		});
		e.preventDefault();
	}

	const saveSignUp = async e => {
		e.preventDefault();
		console.log(signup);
		let success = await actions.clientRegister(signup);
		if (success) {
			console.log("Successful Register");
			history.push("/clients");
		} else {
			console.log("Register failed");
		}
	};

	return (
		<React.Fragment>
			<Card className="formclient" border="dark" bg="transparent">
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
						</Form>
					</Card.Text>
				</Card.Body>
			</Card>
			<ModalFooter>
				<Button variant="outline-dark" className="styleButton font-weight-bolder" onClick={saveSignUp}>
					Register
				</Button>
			</ModalFooter>
		</React.Fragment>
	);
};

export default FormClient;
