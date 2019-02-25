import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../types';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() item: Task;
  @Output() eventCheck: EventEmitter<Task> = new EventEmitter();
  @Output() eventRemove: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  remove() {
    this.eventRemove.emit(this.item);
  }

  checked() {
    this.eventCheck.emit(this.item);
  }

}
