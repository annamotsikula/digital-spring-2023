import { Injectable } from '@angular/core';
import { Todo } from '../entiity/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todoList: Array<Todo> = [
    {
      
      id: 1,
      title: 'delectus aut autem',
      completed: false
    },
    {
     
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false
    },
    {
      id: 3,
      title: 'fugiat veniam minus',
      completed: true
    },
    {
      
      id: 4,
      title: 'et porro tempora',
      completed: true
    }
  ]
  constructor() { }

  getTodoList(): Todo[] {
    return this._todoList
  }

  addTodo(title: string) {
    console.log(`Adding new todo with title ${title}`)
    const newTodo: Todo = {
      id: this._todoList.length + 1,
      title: title,
      completed: false
    }
    this._todoList.unshift(newTodo)
  }

  removeTodo(id: number) {
    this._todoList = this._todoList.filter(todo => todo.id !== id);


  }
}
