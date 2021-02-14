import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Home = () => {
	return (
		<>
			<Container>
				<Row className="homeSignup justify-content-md-center">
					<Col className="buttonSignup">
						<Button variant="outline-warning">
							<p className="text">Join as an User</p>
							<p className="text">Find your style and buy it yourself</p>
						</Button>
					</Col>
					<Col className="buttonSignup">
						<Link to="/signup">
							<Button variant="outline-warning">
								<p className="text">Join as a Professional</p>
								<p className="text">Designers, Architects or Sellers</p>
							</Button>
						</Link>
					</Col>
				</Row>
			</Container>
		</>
	);
};
