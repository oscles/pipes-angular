import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name: string = 'Oscles';
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = 3.141624;
  percent: number = 0.234;
  money: number = 32500.54;

  wolverin: any = {
    nombre: 'Wolverin',
    poder: 'Regeneración',
    cuarte: 'Universal',
    edad: 20,
    direccion: {
      calle: 'Las flores',
      manzana: 24,
      ciudad: 'New York'
    }
  }

  promise: any = new Promise((resol, rej) => {
    setTimeout(() => resol('LLego la data'), 3000);
  });

  today: Date = new Date();

  pipeCustom: string = 'osNaiDer mIranDa';

  serviceYouTube: any = 'https://www.youtube.com/embed/3G7yIUqXZTs?rel=0&amp;showinfo=0';
}


