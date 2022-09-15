import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1>`That's not right`</h1>;
		}
		return <div>{this.props.children}</div>;
	}
}

export default ErrorBoundary;
