import React from 'react';
import {Link} from 'react-router';


class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Pluralsight Administartion</h1>
				<p>React,Redux and React router in RS6 for ultra-responseive web apps</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
			</div>
		)
	}
}
export default HomePage;