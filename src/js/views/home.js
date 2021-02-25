import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormSignup from "../component/formsignup.js";
import "../../styles/home.scss";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.switchBody("home-body");
	}, []);
	return (
		<>
			<Container>
				<Row className="homeSignup justify-content-md-center">
					<Col className="buttonSignup">
						<Button className="buttonUser" variant="outline-light">
							<p className="text">Join as an User</p>
							<p className="description">Find your style and buy it yourself</p>
						</Button>
					</Col>
					<Col className="buttonSignup">
						<Button className="buttonPro" variant="outline-light" onClick={handleShow}>
							<p className="text">Join as a Professional</p>
							<p className="description">Designers, Architects or Sellers</p>
						</Button>
					</Col>
				</Row>
			</Container>
			{/* Modal Sign up */}
			<Modal size="lg" show={show} backdrop="static" keyboard={false}>
				<Modal.Header>
					<Modal.Title>Sign up</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FormSignup />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-dark" className="styleButton font-weight-bolder" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			{/* End Modal Sign up */}
		</>
	);
};
