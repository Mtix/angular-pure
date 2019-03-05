import { Component, OnInit } from '@angular/core';
import { Task } from '../../types';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public taskInput: Task = {name: '', checked: false};
  public taskList: Array<Task>;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.taskList = this.storeService.getStore();

    this.storeService
      .changeDetection
      .subscribe((data: Array<Task>) => {
        this.taskList = data;
      });
  }

  public check() {
    this.saveStore();
  }

  public remove(event) {
    this.taskList.forEach((item, index) => {
      if (event.id === item.id) {
        this.taskList.splice(index, 1);

        return;
      }
    });

    this.saveStore();
  }

  public saveStore() {
    this.storeService.setStore(this.taskList);
  }
  public addTask(taskName: string) {
    this.storeService.pushTask(taskName);
  }

}
