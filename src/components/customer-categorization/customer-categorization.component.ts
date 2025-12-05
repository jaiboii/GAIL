import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-categorization',
  templateUrl: './customer-categorization.component.html',
  imports: [ReactiveFormsModule],
})
export class CustomerCategorizationComponent {
  private fb = inject(FormBuilder);

  categorizationForm = this.fb.group({
    searchNumber: [''],
    fullName: [''],
    mobile: [''],
    address: [''],
    city: [''],
    pincode: [''],
    emailId: [''],
    builderBpNumber: [''],
    tagName: [''],
    isBulk: [false],
    isBlock: [false],
    isUrgent: [false],
    nonFeasible: [false],
    notWillingToTakeGas: [false],
    document: [null],
    remark: [''],
  });

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.categorizationForm.patchValue({ document: file });
    }
  }

  save(): void {
    if (this.categorizationForm.valid) {
      console.log('Form Submitted', this.categorizationForm.value);
      alert('Customer categorization saved!');
      this.clear();
    } else {
      alert('Form is invalid.');
    }
  }

  clear(): void {
    this.categorizationForm.reset({
      isBulk: false,
      isBlock: false,
      isUrgent: false,
      nonFeasible: false,
      notWillingToTakeGas: false,
    });
  }
}
