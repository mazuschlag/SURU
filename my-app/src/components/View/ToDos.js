import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/open-iconic/font/css/open-iconic-bootstrap.css';

const iconStyle = {
	marginLeft: "10px"
}

export class ToDos extends Component {
	constructor(props) {
		super(props);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleEdit(e) {
		this.props.onClickEdit(this.props.index);
	}

	handleDelete(e) {
		this.props.onClickDelete(this.props.index);
	}

  render() {
  	let toDo = null;
  	if (this.props.item.length === 0) {
  		toDo = <li className="list-group-item list-group-item-info">
  						<p><strong>「SURU」とういうタスクリストアプリへようこそ！</strong></p> 
  						<p>初めに左で新しい「すること」を追加しましょう。</p>
						</li>; 
  	} else {
  		if (this.props.item.priority === "0") {
				toDo = <li className="list-group-item list-group-item-success">
  								{this.props.item.input}
  								<span className="oi oi-pencil" title="pencil" style={iconStyle} onClick={this.handleEdit}></span>
  								<span className="oi oi-trash" title="trash" style={iconStyle} onClick={this.handleDelete}></span>
							</li>; 			
  		} else if (this.props.item.priority === "1") {
				toDo = <li className="list-group-item list-group-item-warning">
  								{this.props.item.input}
  								<span className="oi oi-pencil" title="pencil" style={iconStyle} onClick={this.handleEdit}></span>
  								<span className="oi oi-trash" title="trash" style={iconStyle} onClick={this.handleDelete}></span>
							</li>;  			
  		} else {
  			toDo = <li className="list-group-item list-group-item-danger">  								
  								{this.props.item.input}
  								<span className="oi oi-pencil" title="pencil" style={iconStyle} onClick={this.handleEdit}></span>
  								<span className="oi oi-trash" title="trash" style={iconStyle} onClick={this.handleDelete}></span> 
							</li>;
  		}
  	}
    return (
    	<div className="Todos" style={{margin: 0}}>
    		{toDo}
      </div>
    );
  }
}