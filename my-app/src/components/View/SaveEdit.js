import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../../css/View.css';

export class SaveEdit extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.save();
	}

	render() {
		return (
			<div className="SaveEditButton">
				<button type="button" className="btn btn-success" onClick={this.handleClick}>保存</button>
			</div>
		);
	}
}