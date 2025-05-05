import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { TaskManagerComponent } from './pages/task-manager/task-manager.component';
import { SessionComponent } from './pages/session/session.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', redirectTo: '/app', pathMatch: 'full' },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  {
    path: 'app',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'task-manager', pathMatch: 'full' },
      { path: 'task-manager', component: TaskManagerComponent },
      { path: 'session', component: SessionComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];
