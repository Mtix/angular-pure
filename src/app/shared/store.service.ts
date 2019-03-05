import { Injectable, EventEmitter } from '@angular/core';
import { StorageService } from '@mtix/local-storage';
import { Task } from '../types';

const STORE_NAME = 'store-app';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private storage: StorageService) { 
    this.storage.init({
      storeName: STORE_NAME
    });
  }

  public changeDetection = this.storage.changeStore;

  public setStore(data: Array<Task>) {
    this.storage.setState(data);
  }

  public getStore(): Array<Task> {
    return this.storage.getState();
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
