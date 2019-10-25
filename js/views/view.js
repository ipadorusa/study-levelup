import { qs, $on } from '../helper/helper.js';

const ENTER_KEY = 13;
const ESC_KEY = 27;
export default {
    constructor() {
      this.$input = qs('.new-todo');
      this.todoList = qs('.todo-list');
    }
    bindAddItem() {
      $on(this.$input, 'change', ({target}) => {
        const title = target.value;
      });
    }
    viewList() {
        
    }
    input() {
      
    }
}
