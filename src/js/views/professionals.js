import React, { useState, useContext, useEffect } from "react";
import "../../styles/professionals.scss";
import { Row, Card, Col, Image, Button, Container, Modal, Link } from "react-bootstrap";
import FormClient from "../component/formclient.js";
import FormClientList from "../component/formclientlist.js";
import { Context } from "../store/appContext.js";
import usuarioImage from "../../img/usuario.jpg";
import { Redirect } from "react-router-dom";
import proBackground from "../../img/vista_profesional.jpg";

export const Professionals = () => {
	const [state, setState] = useState({});
	const { store, actions } = useContext(Context);

	const [showRegister, setShowRegister] = useState(false);
	const [showList, setShowList] = useState(false);

	const handleCloseRegister = () => setShowRegister(false);
	const handleShowRegister = () => setShowRegister(true);

	const handleCloseList = () => setShowList(false);
	const handleShowList = () => setShowList(true);
	useEffect(() => {
		actions.switchBody("pro-body");
	}, []);

	return (
		<>
			{store.token != "" ? (
				<>
					<Container>
						<Row className="justify-content-center">
							<Col className="card-image" xs={8}>
								<Image className="usuario-image" src={usuarioImage} roundedCircle />
								<Card>
									<Card className="card-professional" style={{ width: "25rem" }}>
										<Card.Title>Professional</Card.Title>
										<Card.Body>
											<Card.Text>{store.professional && store.professional.descrition}</Card.Text>
										</Card.Body>
									</Card>
								</Card>
							</Col>
							<Col className="register-client" xs={4}>
								<Button className="register" variant="light" onClick={handleShowRegister}>
									Client Register
								</Button>
								<Button className="register" variant="light" onClick={handleShowList}>
									Client List
								</Button>
							</Col>
						</Row>
					</Container>

					<Modal size="lg" show={showRegister} backdrop="static" keyboard={false}>
						<Modal.Header>
							<Modal.Title>Client Register</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<FormClient />
						</Modal.Body>
						<Modal.Footer>
							<Button
								variant="outline-dark"
								className="styleButton font-weight-bolder"
								onClick={handleCloseRegister}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>

					<Modal size="lg" show={showList} backdrop="static" keyboard={false}>
						<Modal.Body>
							<FormClientList />
						</Modal.Body>
						<Modal.Footer>
							<Button
								variant="outline-dark"
								className="styleButton font-weight-bolder"
								onClick={handleCloseList}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</>
			) : (
				<Redirect to="/" />
			)}
		</>
	);
};
