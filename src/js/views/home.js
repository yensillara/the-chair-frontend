import React from "react";
import "../../styles/home.scss";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Home = () => (
	<>
		<Container>
			<Row>
				<Col className="justify-content-space-between text-center">
					<Button>
						<p className="tittle">Join as a User</p>
					</Button>
					<p className="description">Find your style and buy it yourself</p>
				</Col>
				<Col>
					<Button>
						<p className="tittle">Join as a professional</p>
					</Button>
					<p className="description">Dedicate to Designers, Architects or Sellers</p>
				</Col>
			</Row>
		</Container>
	</>
);
