import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Task } from '../../../models/task.model';

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

  task: Task = new Task(
    'Task Default',
    'Medium',
    30,
    'To Do',
    new Date(),
    'Work',
    new Date(new Date().setDate(new Date().getDate() + 7))
  );

  taskDuration: number = 15;

  selectedOption: string | null = null;
  taskName: string | null = null;
  isTaskFocused: boolean = false;
  isPopupVisible = true;

  onSelectChange(event: Event) {}

  taskAdded() {
    console.log('Task has been added', event);
    this.addButton.emit(this.task);
    this.isPopupOpen = false;
  }
}
