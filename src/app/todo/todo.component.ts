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
    this.getTodos();
    // console.log(this.activeTodos); 
    // console.log(this.doneTodos)
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

  get activeTodos() {
    return this.todoList.filter(i=> !i.completed)
  }

  get doneTodos() {
    return this.todoList.filter(i=> i.completed)

  }





}
