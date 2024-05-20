import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PayableService } from '../payable.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payable-details',
  templateUrl: './payable-details.component.html',
  standalone: true,
  imports: [RouterModule, CommonModule],
  styleUrl: './payable-details.component.css',
})
export class PayableDetailsComponent implements OnInit {
  payable: any;

  constructor(
    private route: ActivatedRoute,
    private payableService: PayableService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.payableService.getPayableById(id as string).subscribe((data) => {
      console.log(id)
      this.payable = data;
      console.log(this.payable);
    });
  }
}
