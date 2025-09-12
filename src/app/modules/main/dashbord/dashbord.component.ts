import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashbord",
  templateUrl: "./dashbord.component.html",
  styleUrl: "./dashbord.component.scss",
})
export class DashbordComponent implements OnInit {
  ngOnInit(): void {
    this.getImgDashBord();
  }

  arrayProjects: any[] = [];

  getImgDashBord() {
    this.arrayProjects = [
      {
        title: "Retail_Dashboard",
        route: "https://github.com/shimaadaowd/Retail_Dashboard",
      },
      {
        title: "Buslines_Analysis_using_Python_and_SQL",
        route:
          "https://github.com/shimaadaowd/Buslines_Analysis_using_Python_and_SQL",
      },
      {
        title: "Airlines-Analysis",
        route: "https://github.com/shimaadaowd/Airlines-Analysis",
      },
      {
        title: "World-Cup-Analysis",
        route: "https://github.com/shimaadaowd/Airlines-Analysis",
      },
      {
        title: "Gravity-Books-Data-Warehouse",
        route: "https://github.com/shimaadaowd/Gravity-Books-Data-Warehouse",
      },
      {
        title: "HR-Analysis-Dashboard",
        route: "https://github.com/shimaadaowd/HR-Analysis-Dashboard",
      },
      {
        title: "Customer-Segmentation",
        route: "https://github.com/shimaadaowd/Customer-Segmentation",
      },
      {
        title: "Crowd-Funding-Console-App",
        route: "https://github.com/shimaadaowd/Crowd-Funding-Console-App",
      },
      {
        title: "Real-Time-Sign-Langauge-Translator",
        route:
          "https://github.com/shimaadaowd/Real-Time-Sign-Langauge-Translator",
      },
      {
        title: "Real-Time-Face-Detection-and-Recognition-using-OpenCV",
        route:
          "https://github.com/shimaadaowd/Real-Time-Face-Detection-and-Recognition-using-OpenCV",
      },
      {
        title: "Face-Recognition-using-Actors-Datasets-VGG-Model-",
        route:
          "https://github.com/shimaadaowd/Face-Recognition-using-Actors-Datasets-VGG-Model-",
      },
      {
        title: "Face-Detection-Using-OpenCV",
        route: "https://github.com/shimaadaowd/Face-Detection-Using-OpenCV",
      },
      {
        title: "Object-Detection-using-YOLO-v3-with-Keras",
        route: "Object-Detection-using-YOLO-v3-with-Keras",
      },
    ];
  }

  onNavgiteUrlProjects(item: any) {
    window.open(item.route, "_blank");
  }

  onSearch(event: any) {
    let value = event.target.value.toLowerCase();
    if (value) {
      this.arrayProjects = this.arrayProjects.filter((ele) =>
         ele.title.toLowerCase().includes(value)
      );
    } else {
      this.getImgDashBord();
    }
  }
}
