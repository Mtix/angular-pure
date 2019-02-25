import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoButtonAddComponent } from './todo-button-add/todo-button-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { StoreService } from '../../shared/store.service';

@NgModule({
  declarations: [
    TodoComponent,
    TodoInputComponent,
    TodoButtonAddComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TodoComponent
  ],
  providers: [
    StoreService,
  ]
})
export class TodoModule { }
