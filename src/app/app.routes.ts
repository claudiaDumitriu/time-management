import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'register',
    loadComponent: () =>
      import('./register-page/register-page.component').then(
        (m) => m.RegisterPageComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./forgot-password/forgot-password.component').then(
        (m) => m.ForgotPasswordComponent
      ),
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    children: [
      {
        path: '',
        redirectTo: 'task-manager',
        pathMatch: 'full',
      },
      {
        path: 'task-manager',
        loadComponent: () =>
          import('./pages/task-manager/task-manager.component').then(
            (m) => m.TaskManagerComponent
          ),
      },
      {
        path: 'session',
        loadComponent: () =>
          import('./pages/session/session.component').then(
            (m) => m.SessionComponent
          ),
      },
      {
        path: 'archive',
        loadComponent: () =>
          import('./pages/archive/archive.component').then(
            (m) => m.ArchiveComponent
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings.component').then(
            (m) => m.SettingsComponent
          ),
      },
    ],
  },
];
