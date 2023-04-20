import { Component, OnInit } from '@angular/core';
import { TodoService } from './service/todo.service';
import { Todo } from './entiity/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit{
  todoList: Todo[] = []
  todoQuery: string = ""
  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos()
  }


  getTodos() {
    this.todoList = this._todoService.getTodoList()
  }

  addTodo(title: string) {
    if(this.todoQuery !== "") {
      this._todoService.addTodo(title)
      this.todoQuery = ""
    }
    
  }
  removeTodo(id: number) {
    this._todoService.removeTodo(id)
    this.getTodos();

  }







}
