import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

export class Input extends Component {
	constructor(props) {
		super(props);
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e) {
		this.props.update(e.target.value);
	}

	render() {
		return (
			<div className="Input">
			  <div className="form-group">
			    <label>することは何ですか？</label>
			    <textarea className="form-control" id="inputTextBox" rows="3" onChange={this.handleInput}></textarea>
			  </div>
  		</div>			
		);
	}
}