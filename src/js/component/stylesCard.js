import React, { useState } from "react";
import { Card, Form, Image, Container, CardDeck } from "react-bootstrap";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export const stylesCard = ({ designstyle }) => {
	const history = useHistory();

	return (
		<>
			<Container>
				<CardDeck>
					<Card>
						<Card.Img variant="top" src={designstyle.image_url} />
						<Card.Body>
							<Card.Title>{designstyle.name}</Card.Title>
							<Form.Check type="checkbox" />
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src={designstyle.image_url} />
						<Card.Body>
							<Card.Title>{designstyle.name}</Card.Title>
							<Form.Check type="checkbox" />
						</Card.Body>
					</Card>
				</CardDeck>
			</Container>
		</>
	);
};

export default stylesCard;
stylesCard.propTypes = {
	stylesCard: PropTypes.object
};
