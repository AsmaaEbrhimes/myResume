import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    this.showListItem();
  }


@Output()EventRoute=new EventEmitter<string>();
  listItems: any;

  showListItem() {
    this.listItems = [
      { icon: "fa-solid fa-address-card", label: "Home", active: true },
      { icon: "fa-solid fa-chart-pie", label: "About", active: false },
      { icon: "fa-solid fa-certificate", label: "Statistics", active: false },
      { icon: "fa-solid fa-gauge", label: "Resume", active: false },
      { icon: "fa-brands fa-python", label: "Dashboard", active: false },
      { icon: "fa-solid fa-gauge", label: "Experience", active: false },
      { icon: "fa-solid fa-gauge", label: "Education", active: false },
      { icon: "fa-solid fa-ellipsis", label: "more", active: false },
    ];
  }


  onClickListActive(item: any) {
    this.listItems.forEach((i:any) => (i.active = false));
    item.active = true;
    this.EventRoute.emit(item.label);
  }
}
