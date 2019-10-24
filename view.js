import { qs } from './help.js';

export default class View {
    constructor() {
      this.input = qs('.new-todo');
      this.todoList = qs('.todo-list');
      this.init();
    }
    init() {
        console.log('completed')
    }
    addList() {
        
    }
    viewList() {
        
    }
    input() {

    }
}
