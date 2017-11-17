import React, { Component } from 'react';
import { Add } from './Add/Add';
import { View } from './View/View';
import './App.css';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toDoList: []
		}
		this.addToDo = this.addToDo.bind(this);
		this.removeToDo = this.removeToDo.bind(this);
		this.editToDo = this.editToDo.bind(this);
	}

	addToDo(input, priority) {
		const newToDo = {
			input: input,
			priority: priority
		};
		this.setState({
			toDoList: [...this.state.toDoList, newToDo]
		});
	}

	removeToDo(index) {
		this.setState({
			toDoList: this.state.toDoList.filter((_, i) => i !== index)
		});
	}

	editToDo(index, input, priority) {
		const editToDoList = this.state.toDoList;
		editToDoList[index].input = input;
		editToDoList[index].priority = priority;
		this.setState({
			editToDoList,
		});
	}

  render() {
    return (
      <div className="App">
        <Add onClick={this.addToDo} />
        <View toDoList={this.state.toDoList} removeToDo={this.removeToDo} editToDo={this.editToDo} />
      </div>
    );
  }
}