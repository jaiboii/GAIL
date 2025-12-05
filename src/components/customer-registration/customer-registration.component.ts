import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  imports: [ReactiveFormsModule],
})
export class CustomerRegistrationComponent {
  private fb = inject(FormBuilder);

  registrationForm = this.fb.group({
    applicationNumber: [''],
    fullName: ['', Validators.required],
    relationName: [''],
    applicationDate: [''],
    houseNo: [''],
    society: [''],
    street: [''],
    city: [''],
    state: [''],
    pin: [''],
    area: [''],
    landlineOffice: [''],
    landlineResidence: [''],
    mobileNumber: ['', Validators.required],
    emailId: ['', [Validators.required, Validators.email]],
    ownership: ['Owner'],
    paymentPlan: [''],
    promotionalScheme: [''],
    isBulk: [false],
    urgentVerification: [false],
    hasLpg: ['Yes'],
  });

  saveForm(): void {
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
      alert('Customer data saved!');
      this.registrationForm.reset({
        ownership: 'Owner',
        isBulk: false,
        urgentVerification: false,
        hasLpg: 'Yes'
      });
    } else {
      console.log('Form is invalid');
      alert('Please fill out all required fields.');
    }
  }

  clearForm(): void {
    this.registrationForm.reset({
      ownership: 'Owner',
      isBulk: false,
      urgentVerification: false,
      hasLpg: 'Yes'
    });
  }
}
