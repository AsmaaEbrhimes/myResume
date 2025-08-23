/********************************npm install --save-dev @types/aos*******************************88*/


import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{



  ngOnInit(): void {

       this.playWelcomeMessage();
  }

 playWelcomeMessage() {
    // const message = new SpeechSynthesisUtterance(
    //   'Hello, I am Engineer Shimaa. I am a tester, a Power BI developer, and I work at ITI.  i,m Freelance & Corporate Data Trainer and Data Analysis Instructor | Turning Learners into Analysts and Freelance & Corporate Data Trainer And I work Pioneer Solution '
    // );
    // message.lang = 'en-US';
    // message.rate = 1;
    // message.pitch = 1;
    // const voices = speechSynthesis.getVoices();
    // const selectedVoice = voices.find(v => v.lang === 'en-US' && v.name.toLowerCase().includes('female'));
    // if (selectedVoice) {
    //   message.voice = selectedVoice;
    // }

    // speechSynthesis.speak(message);
  }



}
function particlesJS(arg0: string, arg1: { particles: { number: { value: number; }; size: { value: number; }; move: { speed: number; }; line_linked: { enable: boolean; distance: number; color: string; opacity: number; width: number; }; }; interactivity: { detect_on: string; events: { onhover: { enable: boolean; mode: string; }; onclick: { enable: boolean; mode: string; }; }; modes: { repulse: { distance: number; duration: number; }; push: { particles_nb: number; }; }; }; retina_detect: boolean; }) {
  throw new Error('Function not implemented.');
}

