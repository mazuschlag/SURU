import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

export class EditPriority extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.update(e.target.value);
	}

	render() {
		let selectPriority = null;

		if (this.props.defaultPriority === "0") {
			selectPriority = <select className="form-control" id="priorityList" onChange={this.handleChange}>
			      <option selected value="0">低い</option>
			      <option value="1">まあまあ</option>
			      <option value="2">高い</option>
			    </select>;
		} else if (this.props.defaultPriority === "1") {
			selectPriority = <select className="form-control" id="priorityList" onChange={this.handleChange}>
			      <option value="0">低い</option>
			      <option selected value="1">まあまあ</option>
			      <option value="2">高い</option>
			    </select>;
		} else {
			selectPriority = <select className="form-control" id="priorityList" onChange={this.handleChange}>
			      <option value="0">低い</option>
			      <option value="1">まあまあ</option>
			      <option selected value="2">高い</option>
			    </select>;
		}
		return (
			<div className="Priority">
			  <div className="form-group">
			    <label>重要度</label>
			    {selectPriority}
			  </div>
			</div>
		);
	}
}