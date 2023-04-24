import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo/entiity/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo!: Todo
  @Output() removeItem: EventEmitter<number> = new EventEmitter()

  getId(id: number) {
    this.removeItem.emit(id)

  }
}
