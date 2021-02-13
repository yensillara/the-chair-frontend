import React, { useState } from "react";
import { Link } from "react-router-dom";
import brand from "../../img/brand.png";
import { Nav, Modal, Button } from "react-bootstrap";

export const Navbar = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Navbar bg="light" variant="light">
				<Navbar.Brand href="#home">
					<img src={brand} height="90" className="d-inline-block align-top" alt="The Chair logo" />
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#home">About Us</Nav.Link>
					<Nav.Link href="#features">Contact Us</Nav.Link>
					<Nav.Link href="#login">
						<Button variant="primary" onClick={handleShow}>
							Log in
						</Button>
					</Nav.Link>
				</Nav>
			</Navbar>
			{/* Modal */}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>{"Woohoo, you're reading this text in a modal!"}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			{/* End Modal */}
		</>
	);
};
