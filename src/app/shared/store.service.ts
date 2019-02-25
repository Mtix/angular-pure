import { Injectable, EventEmitter } from '@angular/core';
import { Task } from '../types';

const STORE_NAME = 'store-app';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public changeStore: EventEmitter<Task[]> = new EventEmitter();

  constructor() { }

  public setStore(data: Array<Task>) {
    localStorage.setItem(STORE_NAME, JSON.stringify(data));
    this.changeStore.emit(data);
  }

  public getStore(): Array<Task> {
    return JSON.parse(localStorage.getItem(STORE_NAME));
  }

  public pushTask(taskName: string) {
    const store: Array<Task> = this.getStore() ? this.getStore() : [];
    let task: Task;
    let maxId = 0;

    if (store && store[0] && store[0].id) {
      store.forEach((item) => {
        if (item.id > maxId) {
          maxId = item.id;
        }
      });
    }

    task = {
      id: maxId + 1,
      name: taskName,
      checked: false,
    };

    store.push(task);

    this.setStore(store);
  }


}
