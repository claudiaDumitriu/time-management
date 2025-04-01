import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-add-task-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-task-button.component.html',
  styleUrl: './add-task-button.component.scss',
})
export class AddTaskButtonComponent {
  @Output() openNewTask = new EventEmitter<string>();

  isDropdownOpen = false;

  constructor(private elementRef: ElementRef) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  sendMessageToParent() {
    this.openNewTask.emit('Salut din copil!');
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }
}
