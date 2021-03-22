import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';

const CardCustom = (title, body) => {
	return (
		<Card>
			<Card.Header className="title-card">
				<span className="align-middle">{title}</span>
			</Card.Header>
			<Card.Body>
				{body}
			</Card.Body>
		</Card>
	);
}

export default CardCustom;