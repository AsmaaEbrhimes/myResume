import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experiens",
  templateUrl: "./experiens.component.html",
  styleUrl: "./experiens.component.scss",
})
export class ExperiensComponent implements OnInit {
  arrayExperines: any = [];
  ngOnInit(): void {
    this.getAllExperiness();
  }

  getAllExperiness() {
    this.arrayExperines = [
      {
        title: " Data Analyst- Power BI Reporting Specialist",
        suptitle: " Riyadh Third Health Cluster- full time",
        arrayDesc: [
          " Optimized healthcare data using Power BI, improving operational efficiency by 30% across 14 hospitals and 150 health centers, impacting decisions for 829,000+ beneficiaries.",
        ],
      },

      {
        title: " Data Analysis Instructor",
        suptitle: " National Telecommunication Institute (NTI)- Part time",
        arrayDesc: [
          "Leda90-hourtraining program on data analysis tools (SQL, Python, Excel, Power BI, Tableau) and freelance career skills.Mentored learners on real-world projects, achieving 95% completion rates and ensuring mastery of end-to-end workflows",
        ],
      },

      {
        title: "Data Analyst Intern",
        suptitle: " Mentorness)",
        arrayDesc: [
          "Applied my data analysis skills (SQL and Power BI) in real-world business scenarios.",
          "Deepened and enriched my hands-on experience by handling complex data-driven challenges",
        ],
      },

      {
        title: " Data Analysis Instructor",
        suptitle: " Institute of Management Professionals (IMP)- Part time",
        arrayDesc: [
          " Piloted a comprehensive, training 30+ professionals in data transformation and dashboard creation, Recognized as Best Instructor for outstanding participant feedback",
        ],
      },

 {
        title: "Data Engineering Instructor",
        suptitle: " Digital Egypt Pioneers (DEPI)- Part time",
        arrayDesc: [
          " Implemented and delivered an in-depth Microsoft Data Engineer program, covering SQL, MLOps, andessential data engineering tools. Empowered learners with hands-on data engineering skills, enabling 70%+ Azure certification success across participants",
        ],
      },


      {
        title: " Power BI Developer",
        suptitle: " Onspec Engineering and Contracting- Project-Based",
        arrayDesc: [
          "Designed and deployed 4+ end-to-end Power BI dashboards for Onspec Engineering Solutions, improving operational reporting speed by 35% and enabling faster decision-making in industrial automation workflows.",
          "Streamlined data models, reducing reporting time by 40% and enhancing real-time operational insights."
        ],
      },

          {
        title: " Business System Analyst",
        suptitle: "Pioneers Solutions- Full time",
        arrayDesc: [
          "Led the seamless integration of ERP and CRM systems, driving efficiency across diverse business sectors: education, healthcare, and commerce sectors, resulting in actionable data insights that enhanced operational efficiency by 25% and boosted decision-making processes"
        ],
      },

    ];
  }
}
