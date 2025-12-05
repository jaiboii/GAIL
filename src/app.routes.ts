import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './auth.guard';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { CustomerCategorizationComponent } from './components/customer-categorization/customer-categorization.component';
import { LpcApplicabilityComponent } from './components/lpc-applicability/lpc-applicability.component';
import { LpcBulkUploadComponent } from './components/lpc-bulk-upload/lpc-bulk-upload.component';
import { LeadStatusComponent } from './components/lead-status/lead-status.component';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'app',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { 
        path: 'customer-on-boarding', 
        children: [
          { path: 'customer-registration', component: CustomerRegistrationComponent },
          { path: 'customer-categorization', component: CustomerCategorizationComponent },
          { path: '', redirectTo: 'customer-registration', pathMatch: 'full' }
        ]
      },
      {
        path: 'customer-management',
        children: [
          { path: 'lpc-applicability', component: LpcApplicabilityComponent },
          { path: 'lpc-bulk-upload', component: LpcBulkUploadComponent },
          { path: 'lead-status', component: LeadStatusComponent },
          { path: '', redirectTo: 'lpc-applicability', pathMatch: 'full' }
        ]
      },
      // Add other routes for the layout here
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];