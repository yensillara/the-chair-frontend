import React, { useState } from "react";
import { Card, Form, Image, Container, CardDeck } from "react-bootstrap";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export const StylesCard = ({ designStyle, saveDesignStyle, setSaveDesignStyle }) => {
	const history = useHistory();

	return (
		<>
			<Card>
				<Card.Img variant="top" src={designStyle.image_url} />
				<Card.Body>
					<Card.Title>{designStyle.design_style_name}</Card.Title>
					<Form.Check
						type="checkbox"
						onClick={e => setSaveDesignStyle(designStyle.id)}
						checked={designStyle.id == saveDesignStyle}
					/>
				</Card.Body>
			</Card>
		</>
	);
};
StylesCard.propTypes = {
	designStyle: PropTypes.object,
	saveDesignStyle: PropTypes.object,
	setSaveDesignStyle: PropTypes.func
};
