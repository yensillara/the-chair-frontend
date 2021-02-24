import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Login from "./../component/login.js";
import { Nav, Navbar, Button, Modal } from "react-bootstrap";

export const ChairNavbar = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const logOut = () => {
		sessionStorage.token = "";
		sessionStorage.logInState = false;
		store.token = "";
		store.logInState = false;
	};
	useEffect(() => {
		console.log("useEffect");
		if (sessionStorage.getItem("logInState")) {
			store.professional = sessionStorage.getItem("professional");
			store.logInState = true;
			store.token = sessionStorage.token;
		}
	}, []);

	return (
		<>
			<Navbar expand="lg" className="navbar">
				<Navbar.Brand href="/">
					<div className="brand" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/AboutUs" className="text-dark font-weight-bolder">
							About Us
						</Nav.Link>
						<Nav.Link href="/Contact" className="text-dark font-weight-bolder">
							Contact
						</Nav.Link>
						{store.logInState ? (
							<Button
								variant="outline-dark"
								className="styleButton navbarLogout text-white font-weight-bolder"
								onClick={logOut}>
								Log out
							</Button>
						) : (
							<Button
								variant="outline-dark"
								className="styleButton navbarLogin text-white font-weight-bolder"
								onClick={handleShow}>
								Log in
							</Button>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/* Modal Login */}
			<Modal show={show} backdrop="static" keyboard={false}>
				<Modal.Header>
					<Modal.Title>Log in</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Login handleClose={handleClose} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-dark" onClick={handleClose} className="styleButton font-weight-bolder">
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			{/* End Modal Login */}
		</>
	);
};
