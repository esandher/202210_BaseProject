import { Component, OnInit } from '@angular/core';

import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafes-list',
  templateUrl: './cafes-list.component.html',
  styleUrls: ['./cafes-list.component.css']
})
export class CafesListComponent implements OnInit {
  Cafes : Array<Cafe> = [];
  constructor(private cafeService: CafeService  ) { }
  getCafes() {
    this.cafeService.getCafesList().subscribe(Cafes => {
      this.Cafes = Cafes;
      console.log(this.Cafes);
    });
  }
  ngOnInit() {
    this.getCafes();
  }

}
