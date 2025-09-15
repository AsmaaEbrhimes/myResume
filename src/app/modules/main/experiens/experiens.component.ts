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
        title: " Data Analysis Instructor ",
        suptitle: "National Telecommunication Institute (NTI",
        arrayDesc: [
          "Provided personalized training to over 50 individuals seeking to advance their skills in data science and engineering, resulting in an 80%success rate in skill acquisition.",
          "Tailored learning plans to the specific needs of each trainee, achieving a 90% satisfaction rate.",
          "Conducted one-on-one sessions addressing technical challenges, clarifying concepts, and offering career advice, leading to a 25%improvement in trainees job placement rates.",
          "Facilitated hands-on projects and exercises, ensuring a 70% increase in trainees practical application skills",
          " • Monitored trainees' progress and adjusted training strategies, which boosted learning outcomes by 20%.",
        ],
      },

        {
        title: " Data Engineering Instructor",
        suptitle: "Digital Egypt Pioneers (DEPI)",
        arrayDesc: [
          "Developed and delivered a comprehensive curriculum on data science and data engineering, including machine learning, data modeling, datawarehousing, data analysis, and data visualization, impacting over 200 students.",
          " Conducted interactive lectures and workshops that increased student engagement by 30% through real-world projects and case studies.",
          "Mentored and guided 150+ students, leading to a 25% improvement in problem-solving skills, critical thinking and overall technical proficiency.",
          "Evaluated student performance through assessments, projects, and exams, providing constructive feedback that improved average scores by 15%",
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
        title: " Business System Analyst",
        suptitle: "Pioneers Solutions ",
        arrayDesc: [
          "Implemented system designs for various applications",
          "Collected and analyzed applications data.",
          "Created schema for system design. ",
          "Implemented queries for business needs and data optimization.",
          "Analyzed ERP systems for our clients to support business needs",
          "Implemented ERP concepts to multiple projects.",
          "Collaboratively worked with the ERP team to enhance our systems",
        ],
      },

    ];
  }
}
