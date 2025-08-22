// import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';

// @Component({
//   selector: 'app-personalprofile',
//   templateUrl: './personalprofile.component.html',
//   styleUrl: './personalprofile.component.scss',
// })
// export class PersonalprofileComponent implements AfterViewInit {

//   // @Output() openMenue = new EventEmitter<boolean>();

//   // phrases: string[] = ["Data Analyst & Power BI Developer", "Data Analysis Instructor | Turning Learners into Analysts","Freelance & Corporate Data Trainer"];

//   // displayedText: string = '';
//   // phraseIndex: number = 0;
//   // letterIndex: number = 0;
//   // isDeleting: boolean = false;

//   // ngOnInit(): void {
//   //   this.typeEffect();
//   // }

//   // typeEffect(): void {
//   //   const currentPhrase = this.phrases[this.phraseIndex];
//   //   this.displayedText = currentPhrase.substring(0, this.letterIndex);

//   //   if (!this.isDeleting && this.letterIndex < currentPhrase.length) {
//   //     this.letterIndex++;
//   //     setTimeout(() => this.typeEffect(), 100);
//   //   } else if (this.isDeleting && this.letterIndex > 0) {
//   //     this.letterIndex--;
//   //     setTimeout(() => this.typeEffect(), 50);
//   //   } else {
//   //     this.isDeleting = !this.isDeleting;
//   //     if (!this.isDeleting) {
//   //       this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
//   //     }
//   //     setTimeout(() => this.typeEffect(), 1500);
//   //   }
//   // }



//   // openMenu(){
//   //   this.openMenue.emit(true);
//   // }




//   ngAfterViewInit(): void {
//     particlesJS('particles-js', {
//       particles: {
//         number: { value: 200 },
//         size: { value: 1.5 },
//         move: { speed: 1.5 },
//         line_linked: {
//           enable: true,
//           distance: 70,
//           color: "#00ffff",
//           opacity: 0.6,
//           width: 1
//         }
//       },
//       interactivity: {
//         detect_on: "canvas",
//         events: {
//           onhover: { enable: true, mode: "repulse" },
//           onclick: { enable: true, mode: "push" }
//         },
//         modes: {
//           repulse: { distance: 100, duration: 0.4 },
//           push: { particles_nb: 3 }
//         }
//       },
//       retina_detect: true
//     });
//   }
// }
// function particlesJS(arg0: string, arg1: { particles: { number: { value: number; }; size: { value: number; }; move: { speed: number; }; line_linked: { enable: boolean; distance: number; color: string; opacity: number; width: number; }; }; interactivity: { detect_on: string; events: { onhover: { enable: boolean; mode: string; }; onclick: { enable: boolean; mode: string; }; }; modes: { repulse: { distance: number; duration: number; }; push: { particles_nb: number; }; }; }; retina_detect: boolean; }) {
//   throw new Error('Function not implemented.');
// }

































import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-personalprofile',
  templateUrl: './personalprofile.component.html',
  styleUrls: ['./personalprofile.component.scss'],
})
export class PersonalprofileComponent{

}
