import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-task-button.component.html',
  styleUrl: './add-task-button.component.scss',
})
export class AddTaskButtonComponent {
  isDropdownOpen = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
