import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../../css/Add.css';

export class Priority extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.update(e.target.value);
	}

	render() {
		return (
			<div className="Priority">
			  <div className="form-group">
			    <label>重要度</label>
			    <select className="form-control" id="priorityList" onChange={this.handleChange}>
			      <option value="0">低い</option>
			      <option value="1">まあまあ</option>
			      <option value="2">高い</option>
			    </select>
			  </div>
			</div>
		);
	}
}