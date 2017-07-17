import {EventEmitter} from "events";
import dispatcher from "../dispatcher/dispatcher";

class TodoStore extends EventEmitter {

  constructor() {
    super()
    this.todos = [
      {
        id: 1,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 2,
        text: "Pay Water Bill",
        complete: false
      },
    ];
  }

	getAll() {
    return this.todos;
  }

  createTodo(text) {
		console.log(text);
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
	}

	handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "LOAD_TODO": {
        this.getAll();
        break;
      }
    }
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;