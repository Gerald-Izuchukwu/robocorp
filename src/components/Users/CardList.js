import React from 'react';
import Card from './Card';
// import { robots } from './Robots';
const CardList = ({ robots }) => {
	const cardComponent = robots.map((robot) => {
		return (
			<Card
				key={robot.id}
				name={robot.name}
				email={robot.email}
				username={robot.username}
				id={robot.id}
			/>
		);
	});
	return <div>{cardComponent}</div>;
};

export default CardList;
