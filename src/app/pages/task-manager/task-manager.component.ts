import { Component, Input } from '@angular/core';
import { AddTaskButtonComponent } from '../../shared/add-task-button/add-task-button.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { Task } from '../../models/task.model';
import { CommonModule, NgIf } from '@angular/common';
import { DisplayTaskComponent } from './display-task/display-task.component';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [
    AddTaskButtonComponent,
    NewTaskComponent,
    CommonModule,
    DisplayTaskComponent,
  ],
  templateUrl: './task-manager.component.html',

  styleUrl: './task-manager.component.scss',
})
export class TaskManagerComponent {
  @Input() taskList: Task[] = [];
  isPopupVisible: boolean = false;

  showPopup() {
    this.isPopupVisible = true;
  }
  handleTaskAdded(task: Task) {
    this.taskList.push(task);
    this.isPopupVisible = false;
  }
}
