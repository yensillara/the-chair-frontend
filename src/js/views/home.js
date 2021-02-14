import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Home = () => {
	return (
		<>
			<Container>
				<Row>
					<Col className="text-center">
						<Button>
							<p className="tittle">Join as a User</p>
						</Button>
						<p className="description">Find your style and buy it yourself</p>
					</Col>
					<Col>
						<Link to="/signup">
							<p className="tittle">Join as a professional</p>
							<p className="description">Dedicate to Designers, Architects or Sellers</p>
						</Link>
					</Col>
				</Row>
			</Container>
		</>
	);
};
