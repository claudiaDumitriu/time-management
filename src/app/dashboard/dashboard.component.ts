import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, RouterOutlet, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  taskList: Observable<Task[]>;
  constructor(private dialog: MatDialog, private taskService: TaskService) {
    this.taskList = taskService.taskListObs;
  }

  ngOnInit() {
    this.dialog.open(ModalComponent, {
      disableClose: true,
      autoFocus: false,
      hasBackdrop: true,
    });
  }
}
