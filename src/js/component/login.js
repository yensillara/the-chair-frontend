import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Card, Button, Form, ModalFooter } from "react-bootstrap";
import PropTypes from "prop-types";

const Login = ({ handleClose }) => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const professionalLogin = {
		email: "",
		password: ""
	};
	const [login, setLogin] = useState(professionalLogin);

	function changeLogIn(e) {
		setLogin({
			...login,
			[e.target.name]: e.target.value
		});
		e.preventDefault();
	}

	const saveLogIn = async e => {
		e.preventDefault();
		console.log(login);
		let success = await actions.professionalLogin(login);
		if (success) {
			console.log("logged");
			handleClose();
			history.push("/professionals");
		} else {
			console.log("Loging Failed");
		}
	};

	return (
		<>
			<Card className="cardLogin" border="dark" bg="transparent">
				<Card.Body>
					<Card.Text>
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									name="email"
									type="email"
									placeholder="Enter email"
									onChange={changeLogIn}
								/>
								<Form.Text className="text-muted">
									{"We'll never share your email with anyone else."}
								</Form.Text>
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									name="password"
									type="password"
									placeholder="Password"
									onChange={changeLogIn}
								/>
							</Form.Group>
						</Form>
					</Card.Text>
				</Card.Body>
			</Card>
			<ModalFooter>
				<Button variant="outline-dark" className="styleButton font-weight-bolder" onClick={saveLogIn}>
					Submit
				</Button>
			</ModalFooter>
		</>
	);
};

export default Login;

Login.propTypes = {
	handleClose: PropTypes.func
};
