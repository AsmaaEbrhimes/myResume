import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.scss',
})
export class DashbordComponent implements OnInit {
  ngOnInit(): void {
    this.getImgDashBord();
  }

  dashbord: string[] = [];

  getImgDashBord() {
    this.dashbord = [
      '../../../../assets/images/Img====7.jpg',
      '../../../../assets/images/img===8.jpg',
      '../../../../assets/images/img===9.jpg',
      '../../../../assets/images/img====10.jpg',
      '../../../../assets/images/1mg===12.jpg',
      '../../../../assets/images/1mg====13.jpg',
      '../../../../assets/images/img===14.jpg',
      '../../../../assets/images/Dasbord1.jpg',
      '../../../../assets/images/Dashbord 2.jpg',
      '../../../../assets/images/Dashbord 3.jpg',
      '../../../../assets/images/Dasbord 4.jpg',
      '../../../../assets/images/Dashbord 5.jpg',
      '../../../../assets/images/Dashbord 6.jpg',
      '../../../../assets/images/img===11.jpg',

    ];
  }
}
