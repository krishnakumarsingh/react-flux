import React from "react";
import Todo from "./components/Todo";
import * as TodoActions from "./actions/TodoActions";
import TodoStore from "./stores/TodoStore";

class Todos extends React.Component{

	constructor() {
    	super();
	    this.state = {
	      todos: TodoStore.getAll(),
	    };
	    this.createTodo = this.createTodo.bind(this)
 	}

 	createTodo(e) {
 		TodoActions.createTodo(Math.random(), e.target.value);
 	}

	render(){
		const { todos } = this.state;
    	return(
    		<div>
    			<input type="text" onBlur={this.createTodo}/>
	    		<ul>
	    			{
	    				todos.map((todo) => {
	        				return <Todo key={todo.id} {...todo}/>;
	   					})
	    			}
	    		</ul>
	    	</div>
    	)
    }
}

export default Todos