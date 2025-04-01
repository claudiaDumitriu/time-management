import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-display-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-task.component.html',
  styleUrl: './display-task.component.scss',
})
export class DisplayTaskComponent {
  @Input() taskList!: Task[];
}
