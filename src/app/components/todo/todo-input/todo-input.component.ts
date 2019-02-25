import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {

  inputTaskName: string;
  @Output() eventPush: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public taskPush() {
    this.eventPush.emit(this.inputTaskName);
    this.inputTaskName = '';
  }

}
