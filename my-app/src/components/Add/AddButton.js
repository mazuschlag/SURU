import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../../css/Add.css';

export class AddButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.onClick();
	}

	render() {
		return (
			<div className="AddButton">
				<button type="button" className="btn btn-outline-primary btn-block" onClick={this.handleClick}>追加</button>
			</div>
		);
	}
}