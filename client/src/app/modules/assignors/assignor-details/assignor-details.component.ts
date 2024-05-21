// assignors/assignor-detail/assignor-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AssignorService } from '../assignor.service';
import { AssignorModel } from '../../../models/assignor.model';
import { CommonModule } from '@angular/common';
import { PhonePipe } from '../../../pipes/phone.pipe';
import { DocumentPipe } from '../../../pipes/document.pipe';

@Component({
  selector: 'app-assignor-detail',
  templateUrl: './assignor-details.component.html',
  styleUrls: ['./assignor-details.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, PhonePipe, DocumentPipe],
})
export class AssignorDetailsComponent implements OnInit {
  assignor: AssignorModel = {} as AssignorModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assignorService: AssignorService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.assignorService.getAssignorById(id).subscribe(data => {
        this.assignor = data;
        console.log(this.assignor);
      });
    }
  }

  goBack() {
    this.router.navigate(['/assignors']);
  }
}
