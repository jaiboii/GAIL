import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface CustomerRecord {
  bpNo: string;
  name: string;
  mobile: string;
  address: string;
  pincode: string;
  agency: string;
  assignedDate: string;
  supervisor: string;
  assignedDateToSupervisor: string;
  meterPhoto: boolean;
  jmrDetails: boolean;
  willing: boolean;
}

@Component({
  selector: 'app-lpc-applicability',
  templateUrl: './lpc-applicability.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LpcApplicabilityComponent {
  records = signal<CustomerRecord[]>([
    { bpNo: 'A3000973806', name: 'Mahesh', mobile: '9999999999', address: 'Jagatpura, Jaipur', pincode: '302017', agency: 'LMC Agency', assignedDate: '12.01.2025', supervisor: 'Lakshman', assignedDateToSupervisor: '10.02.2025', meterPhoto: true, jmrDetails: false, willing: true },
    { bpNo: 'A3000973806', name: 'Mahesh', mobile: '9999999999', address: 'Jagatpura, Jaipur', pincode: '302017', agency: 'LMC Agency', assignedDate: '12.01.2025', supervisor: 'Lakshman', assignedDateToSupervisor: '10.02.2025', meterPhoto: true, jmrDetails: false, willing: true },
    { bpNo: 'A3000973806', name: 'Mahesh', mobile: '9999999999', address: 'Jagatpura, Jaipur', pincode: '302017', agency: 'LMC Agency', assignedDate: '12.01.2025', supervisor: 'Lakshman', assignedDateToSupervisor: '10.02.2025', meterPhoto: true, jmrDetails: false, willing: true },
    { bpNo: 'A3000973806', name: 'Mahesh', mobile: '9999999999', address: 'Jagatpura, Jaipur', pincode: '302017', agency: 'LMC Agency', assignedDate: '12.01.2025', supervisor: 'Lakshman', assignedDateToSupervisor: '10.02.2025', meterPhoto: true, jmrDetails: false, willing: true },
    { bpNo: 'A3000973806', name: 'Mahesh', mobile: '9999999999', address: 'Jagatpura, Jaipur', pincode: '302017', agency: 'LMC Agency', assignedDate: '12.01.2025', supervisor: 'Lakshman', assignedDateToSupervisor: '10.02.2025', meterPhoto: true, jmrDetails: false, willing: true },
    { bpNo: 'A3000973806', name: 'Mahesh', mobile: '9999999999', address: 'Jagatpura, Jaipur', pincode: '302017', agency: 'LMC Agency', assignedDate: '12.01.2025', supervisor: 'Lakshman', assignedDateToSupervisor: '10.02.2025', meterPhoto: true, jmrDetails: false, willing: true },
    { bpNo: 'A3000973806', name: 'Mahesh', mobile: '9999999999', address: 'Jagatpura, Jaipur', pincode: '302017', agency: 'LMC Agency', assignedDate: '12.01.2025', supervisor: 'Lakshman', assignedDateToSupervisor: '10.02.2025', meterPhoto: true, jmrDetails: false, willing: true },
    { bpNo: 'A3000973806', name: 'Mahesh', mobile: '9999999999', address: 'Jagatpura, Jaipur', pincode: '302017', agency: 'LMC Agency', assignedDate: '12.01.2025', supervisor: 'Lakshman', assignedDateToSupervisor: '10.02.2025', meterPhoto: true, jmrDetails: false, willing: true },
    { bpNo: 'A3000973806', name: 'Mahesh', mobile: '9999999999', address: 'Jagatpura, Jaipur', pincode: '302017', agency: 'LMC Agency', assignedDate: '12.01.2025', supervisor: 'Lakshman', assignedDateToSupervisor: '10.02.2025', meterPhoto: true, jmrDetails: false, willing: true },
    { bpNo: 'A3000973806', name: 'Mahesh', mobile: '9999999999', address: 'Jagatpura, Jaipur', pincode: '302017', agency: 'LMC Agency', assignedDate: '12.01.2025', supervisor: 'Lakshman', assignedDateToSupervisor: '10.02.2025', meterPhoto: true, jmrDetails: false, willing: true },
  ]);
}
