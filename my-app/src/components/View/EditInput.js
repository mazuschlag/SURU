import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../../css/View.css';

export class EditInput extends Component {
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
			    <label>説明</label>
			    <textarea className="form-control" id="inputTextBox" rows="3" value={this.props.currentInput} onChange={this.handleInput}></textarea>
			  </div>
  		</div>			
		);
	}
}