import { qs, $on } from './help.js';

const ENTER_KEY = 13;
const ESC_KEY = 27;
export default class View {
    constructor() {
      const localStorage = window.localStorage;
      let liveTodos = {};

      this.input = qs('.new-todo');
      this.todoList = qs('.todo-list');
      this.init();
    }
    init() {
      this.bindAddItem();
    }
    bindAddItem(handler) {
        $on(this.input, 'change', ({target}) => {
          const title = target.value.trim();
          if (title) {
            this.saveStore(title);
          }
        });
    }
    viewList() {
        
    }
    input() {
      
    }
    saveStore(name) {
      localStorage.setItem(new Date(), name);
      liveTodos.
    }
}
