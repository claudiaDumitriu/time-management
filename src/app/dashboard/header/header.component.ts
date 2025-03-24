import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddTaskButtonComponent } from '../../shared/add-task-button/add-task-button.component';

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
}
