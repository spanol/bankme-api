// assignors/assignor-list/assignor-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AssignorService } from '../assignor.service';
import { AssignorModel } from '../../../models/assignor.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignor-list',
  templateUrl: './assignor-list.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./assignor-list.component.scss'],
})
export class AssignorListComponent implements OnInit {
  assignors: AssignorModel[] = [];

  constructor(
    private assignorService: AssignorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.assignorService.getAssignors().subscribe((data) => {
      this.assignors = data;
      console.log(this.assignors);
    });
  }

}
