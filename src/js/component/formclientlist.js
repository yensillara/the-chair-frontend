import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const FormClientList = ({ client }) => {
	const history = useHistory();

	return (
		<React.Fragment>
			<Card>
				<Card.Header as="h5">{client.full_name}</Card.Header>
				<Card.Body>
					<Button variant="primary" onClick={e => history.push(`/clients/${client.id}`)}>
						Go to Profile{" "}
					</Button>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
};

export default FormClientList;
FormClientList.propTypes = {
	client: PropTypes.object
};
