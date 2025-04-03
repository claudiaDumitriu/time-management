import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Task } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Input() isPopupOpen!: boolean;
  @Output() addButton = new EventEmitter<Task>();
  taskList: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    this.taskList = this.taskService.taskListObs;
  }

  taskDuration: number = 15;

  selectedOption: string | null = null;
  taskName: string | null = null;
  isTaskFocused: boolean = false;
  isPopupVisible = true;

  onSelectChange(event: Event) {}

  taskAdded() {
    console.log('task added');
    const newTask: Task = {
      name: 'New Task claudia',
      priority: 'High',
      duration: 60,
      status: 'To Do',
      date: new Date(),
      type: 'Work',
      deadline: new Date(new Date().setDate(new Date().getDate() + 7)),
    };

    this.taskService.addTask(newTask);
    this.taskList = this.taskService.taskListObs;

    this.isPopupOpen = false;
  }
}
