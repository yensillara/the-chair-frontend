import React, { useState, useContext, useEffect } from "react";
import "../../styles/clients.scss";
import { Row, Col, Image, Button, Container, ListGroup } from "react-bootstrap";
import { Context } from "../store/appContext.js";
import clienteImage from "../../img/cliente.jpg";
import proBackground from "../../img/vista_profesional.jpg";
import { Project } from "../component/project";
import { useHistory, useParams } from "react-router-dom";

export const Clients = () => {
	const [state, setState] = useState({});
	const { store, actions } = useContext(Context);

	const [showCreate, setShowCreate] = useState(false);
	const [showProjectList, setShowProjectList] = useState(false);

	const handleCloseCreate = () => setShowCreate(false);
	const handleShowCreate = () => setShowCreate(true);

	const handleCloseProjectList = () => setShowProjectList(false);
	const handleShowProjectList = () => setShowProjectList(true);

	const [client, setClient] = useState(null);

	const history = useHistory();

	const params = useParams();

	useEffect(() => {
		actions.switchBody("pro-body");
	}, []);

	useEffect(() => {
		for (let storeClient of store.clients) {
			if (params.clientId == storeClient.id) {
				setClient(storeClient);
				break;
			}
		}
	}, [params, store.clients]);

	return (
		<>
			<Container>
				<Row className="justify-content-center mb-5">
					<Col className="card-image" xs={8}>
						<Image className="cliente-image" src={clienteImage} roundedCircle />
						<ListGroup className="cliente-items" style={{ width: "30rem" }}>
							<ListGroup.Item>{client && client.full_name}</ListGroup.Item>
							<ListGroup.Item>{client && client.email}</ListGroup.Item>
							<ListGroup.Item>{client && client.phone}</ListGroup.Item>
							<ListGroup.Item>{client && client.location}</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col className="create-project" xs={4}>
						<Button className="back" variant="light" onClick={e => history.goBack()}>
							Back to Professional Profile
						</Button>
						<Button className="create" variant="light" onClick={handleShowCreate}>
							Create Project
						</Button>
						<Button className="create" variant="light" onClick={handleShowProjectList}>
							Project List
						</Button>
					</Col>
				</Row>
			</Container>
			{/* project view */}
			<Project />
		</>
	);
};
