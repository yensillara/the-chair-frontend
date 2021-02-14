import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";

export const ChairNavbar = () => {
	return (
		<>
			<Navbar expand="lg" className="navbar">
				<Navbar.Brand href="/">
					<div className="brand" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/AboutUs" className="text-dark">
							About Us
						</Nav.Link>
						<Nav.Link href="/Contact" className="text-dark">
							Contact
						</Nav.Link>
						<Link to="/login">
							<Button variant="outline-dark" className="loginButton text-white font-weight-bolder">
								Log in
							</Button>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
