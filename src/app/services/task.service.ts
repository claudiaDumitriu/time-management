import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskListSource = new BehaviorSubject<Task[]>([]);
  taskListObs = this.taskListSource.asObservable();

  constructor() {}

  addTask(task: Task) {
    const currentTasks = this.taskListSource.value;
    this.taskListSource.next([...currentTasks, task]);
  }
}
