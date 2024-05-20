import { Component, OnInit } from '@angular/core';
import { PayableService } from '../payable.service';
import { PayablesModule } from '../payables.module';
import { PayableModel } from '../../../models/payable.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payable-list',
  templateUrl: './payable-list.component.html',
  standalone: true,
  imports: [RouterModule, CommonModule],
  styleUrl: './payable-list.component.css',
})
export class PayableListComponent implements OnInit {
  payables: PayableModel[] = [];

  constructor(private payableService: PayableService) {}

  ngOnInit() {
    this.payableService.getPayables().subscribe((data) => {
      this.payables = data;
      console.log(data);
    });
  }

  editPayable(ev: Event, id: string) {
    ev.stopPropagation();

    this.payableService.getPayableById(id).subscribe((payable) => {
      console.log(payable);
    });
    // Implementar lógica de edição
  }

  deletePayable(ev: Event,id: string) {
    // prevent event buble
    ev.stopPropagation();
    this.payableService.deletePayable(id).subscribe(() => {
      this.payables = this.payables.filter((payable) => payable.id !== id);
    });
  }
}
