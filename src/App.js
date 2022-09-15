import React, { Component } from 'react';
import CardList from './components/Users/CardList';
import SearchBox from './components/Users/SearchBox';
import Scroll from './components/layouts/Scroll';
import ErrorBoundary from './components/Users/ErrorBoundary';
import './App.css';
// import { robots } from './components/Users/Robots';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: '',
		};
	}
	async componentDidMount() {
		const resData = await fetch(
			'https://jsonplaceholder.typicode.com/users'
		);
		const data = await resData.json();
		this.setState({ robots: data });
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>;
		} else {
			return (
				<div className='App tc'>
					<h1>{'RobotFriends'.toUpperCase()}</h1>
					<div className='container'>
						<SearchBox searchChange={this.onSearchChange} />
						<Scroll>
							<ErrorBoundary>
								<CardList robots={filteredRobots} />
							</ErrorBoundary>
						</Scroll>
					</div>
				</div>
			);
		}
	}
}

// note: robots can be passed in as a prop in the CardList rendered, then it's brought in as a prop in the CardList.js file,
// this is an alternative way instead of importing it
export default App;
