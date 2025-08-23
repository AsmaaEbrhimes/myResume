
import { Component, OnInit } from "@angular/core";

declare var particlesJS: any;

@Component({
  selector: "app-personalprofile",
  templateUrl: "./personalprofile.component.html",
  styleUrls: ["./personalprofile.component.scss"],
})
export class PersonalprofileComponent implements OnInit {
  ngOnInit(): void {
    this.startTyping();
  }
  textArray: string[] = [
    "Data Analyst & Power BI Developer",
    "Data Analysis Instructor | Turning Learners into Analysts",
    "Freelance & Corporate Data Trainer",
  ];
  splitWords: string[][] = [];
  private textIndex = 0;
  private charIndex = 0;
  currentText: string = "";



   startTyping() {
    const currentSentence = this.textArray[this.textIndex];

    if (this.charIndex < currentSentence.length) {
      this.currentText += currentSentence[this.charIndex];
      this.charIndex++;

      setTimeout(() => this.startTyping(), 100); // كل 100ms يضيف حرف
    } else {
      setTimeout(() => {
        this.charIndex = 0;
        this.currentText = "";
        this.textIndex = (this.textIndex + 1) % this.textArray.length; // loop
        this.startTyping();
      }, 10000);
    }
  }
}
