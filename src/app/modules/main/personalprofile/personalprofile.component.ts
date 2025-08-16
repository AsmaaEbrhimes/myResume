import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personalprofile',
  templateUrl: './personalprofile.component.html',
  styleUrl: './personalprofile.component.scss',
})
export class PersonalprofileComponent implements OnInit {

  @Output() openMenue = new EventEmitter<boolean>();

  phrases: string[] = ["Data Analyst & Power BI Developer", "Data Analysis Instructor | Turning Learners into Analysts","Freelance & Corporate Data Trainer"];

  displayedText: string = '';
  phraseIndex: number = 0;
  letterIndex: number = 0;
  isDeleting: boolean = false;

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect(): void {
    const currentPhrase = this.phrases[this.phraseIndex];
    this.displayedText = currentPhrase.substring(0, this.letterIndex);

    if (!this.isDeleting && this.letterIndex < currentPhrase.length) {
      this.letterIndex++;
      setTimeout(() => this.typeEffect(), 100);
    } else if (this.isDeleting && this.letterIndex > 0) {
      this.letterIndex--;
      setTimeout(() => this.typeEffect(), 50);
    } else {
      this.isDeleting = !this.isDeleting;
      if (!this.isDeleting) {
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      }
      setTimeout(() => this.typeEffect(), 1500);
    }
  }



  openMenu(){
    this.openMenue.emit(true);
  }
}
