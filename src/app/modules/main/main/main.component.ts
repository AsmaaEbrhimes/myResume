import { AfterViewInit, Component } from '@angular/core';
// import { MenueComponent } from '../menue/menue.component';
declare var particlesJS: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})

export class MainComponent implements AfterViewInit{
  navigation:string="";

  onEventRoute(event: string){
this.navigation = event;
 const el = document.getElementById(this.navigation);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }}

  ngAfterViewInit(): void {
    particlesJS('particles-js', {
      particles: {
        number: { value: 200 },
        size: { value: 1.5 },
        move: { speed:5 },
        line_linked: {
          enable: true,
          distance: 70,
          color: "#00ffff",
          opacity: 0.6,
          width: 1
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }





}
