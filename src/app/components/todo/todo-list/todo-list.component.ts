import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Task } from '../../../types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {

  @Input() list: Array<Task> = [];
  @Output() eventChecked: EventEmitter<Task> = new EventEmitter();
  @Output() eventRemove: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  remove(event: Task) {
    this.eventRemove.emit(event);
  }

  check() {
    this.eventChecked.emit();
  }

}
