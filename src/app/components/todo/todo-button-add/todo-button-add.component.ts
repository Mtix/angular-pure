import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-button-add',
  templateUrl: './todo-button-add.component.html',
  styleUrls: ['./todo-button-add.component.scss']
})
export class TodoButtonAddComponent {

  @Output() eventTaskAdd: EventEmitter<any> = new EventEmitter();

  constructor() { }

  taskAdd() {
    this.eventTaskAdd.emit();
  }

}
