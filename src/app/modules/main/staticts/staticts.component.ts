import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staticts',
  templateUrl: './staticts.component.html',
  styleUrl: './staticts.component.scss'
})
export class StatictsComponent implements OnInit{
dataStaticts:any[] = [];

ngOnInit() {
this.getStatictsData()
}



getStatictsData() {
this.dataStaticts = [
{ title: 'LinkedIn ​Network Of Followers', value: '2000+' },
{ title: 'Certificates Showcasing ​Expertise', value: '50+' },
{ title: 'Learn Impacted via Interactive Sessions', value: '400+' },
{ title: 'Businness Domains Analyzed', value: '15+' },
{ title: 'Feedback Reviews', value: '100+' }
];
}
}
