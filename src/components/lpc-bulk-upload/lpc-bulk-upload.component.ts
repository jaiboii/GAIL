import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface UnprocessedRecord {
  srNo: number;
  bpNumber: string;
  reason: string;
  date: string;
}

interface BpRecord {
  srNo: number;
  bpNumber: string;
  bpName: string;
  mobileNumber: string;
  address: string;
  isLpc: boolean;
}

@Component({
  selector: 'app-lpc-bulk-upload',
  templateUrl: './lpc-bulk-upload.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LpcBulkUploadComponent {
  unprocessedData = signal<UnprocessedRecord[]>([]);

  bpList = signal<BpRecord[]>([
    { srNo: 1, bpNumber: '3000294546', bpName: 'Dhaval', mobileNumber: '9255449887', address: 'Anand Upvan Society', isLpc: true },
    { srNo: 1, bpNumber: '3000294546', bpName: 'Dhaval', mobileNumber: '9255449887', address: 'Anand Upvan Society', isLpc: false },
    { srNo: 1, bpNumber: '3000294546', bpName: 'Dhaval', mobileNumber: '9255449887', address: 'Anand Upvan Society', isLpc: true },
    { srNo: 1, bpNumber: '3000294546', bpName: 'Dhaval', mobileNumber: '9255449887', address: 'Anand Upvan Society', isLpc: true },
    { srNo: 1, bpNumber: '3000294546', bpName: 'Dhaval', mobileNumber: '9255449887', address: 'Anand Upvan Society', isLpc: false },
    { srNo: 1, bpNumber: '3000294546', bpName: 'Dhaval', mobileNumber: '9255449887', address: 'Anand Upvan Society', isLpc: true },
  ]);
}
