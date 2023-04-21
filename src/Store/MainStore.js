import { observable, action } from 'mobx';

class MainStore {
  @observable 
   todos = [];

  @action 
   addTodo = (todo) => {
    this.todos.push(todo);
  }

  @action
   removeTodo = (index) => {
    this.todos.splice(index, 1);
  }
}

const MainStore = new MainStore();

export default MainStore;
