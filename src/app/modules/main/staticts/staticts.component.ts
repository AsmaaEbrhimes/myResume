import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-staticts",
  templateUrl: "./staticts.component.html",
  styleUrls: ["./staticts.component.scss"],
})
export class StatictsComponent implements OnInit {
  dataStaticts: any;
  data: any;
  options: any;

  ngOnInit(): void {
    this.getStatictsData();
  }

  getStatictsData() {
    this.dataStaticts = [
      { title: "Power BI", value: 94 },
      { title: "SQL", value: 90 },
      { title: "DAX", value: 84 },
      { title: "Excel", value: 91 },
      { title: "Python", value: 89 },
      { title: "Modeling", value: 85 },
      { title: "Tableau", value: 82 },
      { title: "R", value: 65 },
      { title: "ssIs", value: 63 },

    ];

    this.data = {
      labels: this.dataStaticts.map((item:any) => item.title),
      datasets: [
        {
          label: 'Skill Level (%)',
          data: this.dataStaticts.map((item:any) => item.value),
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          borderWidth: 1
        }
      ]
    };

    this.options = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    };
  }
}
