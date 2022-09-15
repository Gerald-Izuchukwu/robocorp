import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
	return (
		<div className={`tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5`}>
			<img
				src={`https://robohash.org/${props.id}?size=150x150`}
				alt='pic'
			/>
			<div>
				<h2>
					{props.id}. {props.name}
				</h2>
				<h4>Email: {props.email}</h4>
				<h2>{props.username}</h2>
			</div>
		</div>
	);
};

Card.propTypes = {
	email: PropTypes.string.isRequired,
};

export default Card;
