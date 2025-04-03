import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddTaskButtonComponent } from '../../shared/add-task-button/add-task-button.component';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AddTaskButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDropdownOpen = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  handleNewTask() {
    console.log('claudia');
  }

  taskList: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    this.taskList = this.taskService.taskListObs;
  }

  taskAdded() {
    const newTask: Task = {
      name: 'Claudia',
      priority: 'High',
      duration: 60,
      status: 'To Do',
      date: new Date(),
      type: 'Work',
      deadline: new Date(new Date().setDate(new Date().getDate() + 7)),
    };

    this.taskService.addTask(newTask);
    this.taskList = this.taskService.taskListObs;

    this.isDropdownOpen = false;
  }
}
