import React, { useState, useContext, useEffect } from "react";
import "../../styles/project.scss";
import { Row, Col, Card, Form, Image, Button, Container, ListGroup, CardDeck } from "react-bootstrap";
import { StylesCard } from "../component/stylesCard.js";
import { Context } from "../store/appContext.js";
import clienteImage from "../../img/cliente.jpg";

export const Project = () => {
	const { store, actions } = useContext(Context);

	const [saveDesignStyle, setSaveDesignStyle] = useState(null);

	// useEffect(() => {
	// 	actions.retorno();
	// });

	return (
		<>
			<Container fluid>
				<Row>
					<Col>
						<Card>
							<Card.Header as="h5">Project Name</Card.Header>
							<Card.Body>
								<Form.Control type="text" placeholder="Project name" />
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Header as="h5">Tipology</Card.Header>
							<Card.Body>
								<Form.Control as="select">
									<option>Choose one</option>
									<option>Residential</option>
									<option>Office</option>
									<option>Comercial</option>
								</Form.Control>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Header as="h5">Workspace</Card.Header>
							<Card.Body>
								<Form.Control as="select">
									<option>Choose one</option>
									<option>Living room</option>
									<option>Family room</option>
									<option>Kitchen</option>
									<option>Bathroom</option>
									<option>Vestier</option>
									<option>Home Office</option>
									<option>Office</option>
									<option>Playroom</option>
									<option>Laundry</option>
									<option>Outdoor</option>
								</Form.Control>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Card.Header as="h5" className="headers bg-white">
					Design Style
					{store.projectOptions &&
						store.projectOptions.designStyles &&
						store.projectOptions.designStyles.map(designStyle => (
							<StylesCard
								designStyle={designStyle}
								key={designStyle.id}
								saveDesignStyle={saveDesignStyle}
								setSaveDesignStyle={setSaveDesignStyle}
							/>
						))}
				</Card.Header>

				<Card.Header as="h5" className="headers bg-white">
					Furniture Style
				</Card.Header>

				<Card.Header as="h5" className="headers bg-white">
					Accesories Style
				</Card.Header>

				<Card.Header as="h5" className="headers bg-white">
					Color Palettes
				</Card.Header>

				<Card.Header as="h5" className="headers bg-white">
					Texture
				</Card.Header>

				<Card.Header as="h5" className="headers bg-white">
					Finishes
				</Card.Header>
				<Card.Header as="h5" className="headers bg-white">
					Sketch
				</Card.Header>
				<Form.Group>
					<Form.File id="exampleFormControlFile1" />
				</Form.Group>
				<Col className="projectButton">
					<Button className="save" variant="light">
						Save Project
					</Button>
					<Button className="save" variant="light">
						Save in PDF
					</Button>
				</Col>
			</Container>
		</>
	);
};
