import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const FormClientList = () => {
	return (
		<React.Fragment>
			<Card>
				<Card.Header as="h5">Client Name</Card.Header>
				<Card.Body>
					<Button variant="primary">Go to Profile</Button>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
};
export default FormClientList;
