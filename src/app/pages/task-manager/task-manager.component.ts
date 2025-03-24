import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';
import { RouterModule } from '@angular/router';
import { AddTaskButtonComponent } from '../../shared/add-task-button/add-task-button.component';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [AddTaskButtonComponent],
  templateUrl: './task-manager.component.html',

  styleUrl: './task-manager.component.scss',
})
export class TaskManagerComponent {}
