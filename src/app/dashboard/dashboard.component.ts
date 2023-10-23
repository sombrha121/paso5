import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// remplazamo el codigo generico paso 5 p1
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];// Declaramos una propiedad 'heroes' como un arreglo de objetos Hero.

  constructor(private heroService: HeroService) { }// Inyectamos el servicio HeroService en el constructor.

  ngOnInit(): void {
    this.getHeroes();// Al inicializar el componente, llamamos a la función 'getHeroes'.
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    // Obtenemos la lista de héroes del servicio y luego la dividimos para mostrar solo los héroes en las posiciones 1 a 4
      .subscribe(heroes => this.heroes = heroes.slice(1, 5)); // p5 p2 esto devuelve la lista divida de heroes en la posicion 1 y 5 solo los heroes dos y tres cuadtro y cincuoo
  }
}