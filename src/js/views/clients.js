import React, { useState, useContext, useEffect } from "react";
import "../../styles/clients.scss";
import { Row, Col, Image, Button, Container, ListGroup } from "react-bootstrap";
import { Context } from "../store/appContext.js";
import clienteImage from "../../img/cliente.jpg";

export const Clients = () => {
	const [state, setState] = useState({});
	const { store, actions } = useContext(Context);

	const [showCreate, setShowCreate] = useState(false);
	const [showProjectList, setShowProjectList] = useState(false);

	const handleCloseCreate = () => setShowCreate(false);
	const handleShowCreate = () => setShowCreate(true);

	const handleCloseProjectList = () => setShowProjectList(false);
	const handleShowProjectList = () => setShowProjectList(true);

	return (
		<>
			<Container>
				<Row className="justify-content-center">
					<Col className="card-image" xs={8}>
						<Image className="cliente-image" src={clienteImage} roundedCircle />
						<ListGroup className="cliente-items" style={{ width: "30rem" }}>
							<ListGroup.Item>Client Full Name</ListGroup.Item>
							<ListGroup.Item>Email</ListGroup.Item>
							<ListGroup.Item>Phone</ListGroup.Item>
							<ListGroup.Item>Location</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col className="create-project" xs={4}>
						<Button className="create" variant="light" onClick={handleShowCreate}>
							Create Project
						</Button>
						<Button className="create" variant="light" onClick={handleShowProjectList}>
							Project List
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};
