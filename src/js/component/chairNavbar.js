import React, { useState } from "react";
import Login from "./../component/login.js";
import { Nav, Navbar, Button, Modal } from "react-bootstrap";

export const ChairNavbar = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
						<Button
							variant="outline-dark"
							className="styleButton navbarLogin text-white font-weight-bolder"
							onClick={handleShow}>
							Log in
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/* Modal Login */}
			<Modal show={show} backdrop="static" keyboard={false}>
				<Modal.Header>
					<Modal.Title>Log in</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Login />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-dark" onClick={handleClose} className="styleButton font-weight-bolder">
						Close
					</Button>
					<Button variant="outline-dark" className="styleButton font-weight-bolder">
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
			{/* End Modal Login */}
		</>
	);
};
