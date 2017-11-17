import React, { Component } from 'react';
import { Input } from './Input';
import { Priority } from './Priority';
import { AddButton } from './AddButton';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

export class Add extends Component {
	constructor(props) {
		super(props);
		this.updateInput = this.updateInput.bind(this);
		this.updatePriority = this.updatePriority.bind(this);
		this.add = this.add.bind(this);
		this.state = {
			userInput: "",
			priority: "0"
		}
	}

	updateInput(newInput) {
		this.setState({userInput: newInput});
	}

	updatePriority(newPriority) {
		this.setState({priority: newPriority});
	}

	add() {
		this.props.onClick(this.state.userInput, this.state.priority);
	}

  render() {
    return (
      <div className="Add">
      	<div className="card card-inverse card-info mb-3">
					<div className="card-header">
						やることを追加
	  			</div>
	  			<div className="card-block">
	  				<Input update={this.updateInput} />
	  				<Priority update={this.updatePriority} />
	  				<AddButton onClick={this.add} />
	  			</div>
	  		</div>
    	</div>
    );
  }
}