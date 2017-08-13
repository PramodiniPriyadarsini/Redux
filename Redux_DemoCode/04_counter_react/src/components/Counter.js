import React from 'react';

export default class Counter extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.value}</h1>
        <button onClick={this.props.increment}>Inc</button>
        <button onClick={this.props.decrement}>Dec</button>
			</div>
		);
	}
}
