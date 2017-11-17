import React, { Component } from 'react';
import { EditInput } from './EditInput';
import { EditPriority } from './EditPriority';
import { SaveEdit } from './SaveEdit';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/View.css';

export class Edit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editInput: this.props.item.input,
			editPriority: this.props.item.priority
		};
		this.updateInput = this.updateInput.bind(this);
		this.updatePriority = this.updatePriority.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	updateInput(newInput) {
		this.setState({editInput: newInput});
	}

	updatePriority(newPriority) {
		this.setState({editPriority: newPriority});
	}

	handleSave() {
		this.props.applyEdit(this.state.editInput, this.state.editPriority);
	}

	render() {
		let cn = null;
		if (this.props.item.priority === "0") {
			cn = "list-group-item list-group-item-success";
		} else if (this.props.item.priority === "1") {
			cn = "list-group-item list-group-item-warning";
		} else {
			cn = "list-group-item list-group-item-danger";
		}

		return (<div className="Edit">
			<li className={cn}>
				<EditInput update={this.updateInput} currentInput={this.state.editInput} />
				<EditPriority update={this.updatePriority} defaultPriority={this.props.item.priority} />
				<SaveEdit save={this.handleSave} />
			</li>
		</div>
		);
	}
}