import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from '../../../models/task.model';
import { Observable } from 'rxjs';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-display-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-task.component.html',
  styleUrl: './display-task.component.scss',
})
export class DisplayTaskComponent {
  taskList: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    this.taskList = this.taskService.taskListObs;
  }
}
