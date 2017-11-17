import React, { Component } from 'react';
import { ToDos } from './ToDos';
import { Edit } from './Edit';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/View.css';

export class View extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			editIndex: -1
		};
		this.editToDo = this.editToDo.bind(this);
		this.applyEdit = this.applyEdit.bind(this);
	}

	editToDo(index) {
		this.setState({editIndex: index});
	}

	applyEdit(editInput, editPriority) {
		const toEdit = this.state.editIndex;
		this.setState({editIndex: -1});
		this.props.editToDo(toEdit, editInput, editPriority);
	}

  render() {
  	const toDoListLen = this.props.toDoList.length;
  	let toDoList = null;
  	if (toDoListLen === 0) {
  		toDoList = <ToDos item={[]} />;
  	} else {
  		toDoList = this.props.toDoList.map((toDo, i) => {
  			if (i === this.state.editIndex) {
  				return <Edit item={toDo} key={i} applyEdit={this.applyEdit} />;
  			} else {
  				return <ToDos item={toDo} key={i} index={i} onClickDelete={this.props.removeToDo} onClickEdit={this.editToDo} />;
  			}
  		});
  	}
    return (
    	<div className="View">
	      <div className="card">
					<div className="card-header">
	    			タスクリスト
	  			</div>
	  			<ul className="list-group">
	  				{toDoList}
	  			</ul>      	
	      </div>
      </div>
    );
  }
}