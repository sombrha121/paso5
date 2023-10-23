import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Importamos la interfaz 'Hero'.
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []; // Creamos un arreglo de héroes y lo inicializamos como un arreglo vacío.
  selectedHero?: Hero; // Declaramos una propiedad 'selectedHero' que puede ser de tipo 'Hero' o 'undefined'.

  constructor(private heroService: HeroService) {} // Constructor de la clase, inyectamos 'HeroService'.

  ngOnInit(): void {
    this.getHeroes(); // En el método 'ngOnInit', llamamos la función 'getHeroes' para obtener la lista de héroes.
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); // Usamos 'HeroService' para obtener los héroes y los asignamos a la propiedad 'heroes'.
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero; // Esta función se llama cuando se selecciona un héroe y asigna el héroe seleccionado a 'selectedHero'.
  }

  // Agregamos las siguientes funciones para mostrar y ocultar detalles de los héroes.
  showDetails(hero: Hero): void {
    hero.showDetails = true; // Establece la propiedad 'showDetails' del héroe como 'true' para mostrar detalles.
  }

  hideDetails(hero: Hero): void {
    hero.showDetails = false; // Establece la propiedad 'showDetails' del héroe como 'false' para ocultar detalles.
  }
}





   //paso 4 datos de observables puede buscar héroes p5
  


 

/*import { Component } from '@angular/core';
// paso 4 eliminamos el componente heroimport { HEROES } from '../mock-heroes'; 
// Importa HEROES desde el archivo mock-heroes.ts
export class HeroesComponent implements OnInit {
  // paso 4 se elimina HEROES
  heroes: Hero[] =[] ;//HEROES; 
  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.getHeroes();
  // paso 2  cap 1 Asigna el array de héroes a la propiedad heroes
  //heroes = HEROES; // Esta línea es redundante se puede eliminar esta lina paso 2 cap 4
  selectedHero?: Hero; // Inicialmente, no hay héroe seleccionado

  onSelect(hero: Hero): void {
    this.selectedHero = hero; // Asigna el héroe seleccionado
  }
}

    
   // id: 1,  paso 2 se elimina el antiguo nombre preterminado 
    //name: 'superman'
  */
