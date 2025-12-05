import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Lead {
  fullName: string;
  relationName: string;
  houseNo: string;
  society: string;
  street: string;
  city: string;
  mobileNumber: string;
  phoneNumber: string;
  email: string;
}

@Component({
  selector: 'app-lead-status',
  templateUrl: './lead-status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeadStatusComponent {
  leads = signal<Lead[]>([
    { fullName: 'newtest', relationName: 'Sinsin', houseNo: 't/3o', society: 'new school', street: 'Near temple', city: 'Meerut', mobileNumber: '9255449887', phoneNumber: '94088465449887', email: 'new@gmail.com' },
    { fullName: 'omkar', relationName: 'James', houseNo: '5/6', society: 'Near temple', street: 'silverpoint', city: 'Meerut', mobileNumber: '9255449887', phoneNumber: '94088465449887', email: 'om@gmail.com' },
    { fullName: 'Test 1', relationName: 'Rakesh', houseNo: 'JH/21', society: 'silverpoint', street: 'Rojdipoint', city: 'Meerut', mobileNumber: '9255449887', phoneNumber: '94088465449887', email: 'om@gmail.com' },
    { fullName: 'Sonia', relationName: 'Simsin', houseNo: 't/3o', society: 'Pitapur', street: 'Rojdipoint', city: 'Meerut', mobileNumber: '9255449887', phoneNumber: '94088465449887', email: 'om@gmail.com' },
    { fullName: 'omkar', relationName: 'Sinsin', houseNo: '8/30', society: 'Rajlaxmi society', street: 'Pirajpur', city: 'Meerut', mobileNumber: '9255449887', phoneNumber: '94088465449887', email: 'om@gmail.com' },
    { fullName: 'omkar', relationName: 'James', houseNo: 't/3o', society: 'Bhavna road', street: 'D/30', city: 'Meerut', mobileNumber: '9255449887', phoneNumber: '94088465449887', email: 'om@gmail.com' },
    { fullName: 'newtest', relationName: 'Simsin', houseNo: 't/3o', society: 'Bhavna road', street: 'D/30', city: 'Meerut', mobileNumber: '9255449887', phoneNumber: '94088465449887', email: 'om@gmail.com' },
  ]);
}
