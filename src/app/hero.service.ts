import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service'; // Importa el servicio de mensajes

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { } // Inyecta el servicio de mensajes en el constructor

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // Obtiene los héroes simulados de la constante HEROES
    this.messageService.add('HeroService: fetched heroes'); // Agrega un mensaje cuando se recuperan los héroes
    return heroes; // Devuelve los héroes como un Observable
  }
  getHero(id: number): Observable<Hero> { //paso 5 parte 14 agregamos metodo de id despues de getheroe Los caracteres de comilla invertida ( `) definen un JavaScript
// Buscamos un héroe en el array HEROES que coincida con el ID proporcionado.
const hero = HEROES.find(h => h.id === id)!;

// Agregamos un mensaje al servicio MessageService para registrar la obtención del héroe con el ID especificado.
this.messageService.add(`HeroService: fetched hero id=${id}`);

// Devolvemos el héroe encontrado como un Observable utilizando la función 'of' de RxJS.
return of(hero);

  }
  
}
/*Se importa el servicio MessageService para registrar mensajes.
En el constructor, se inyecta el servicio MessageService para que esté disponible en la clase HeroService.
El método getHeroes ahora devuelve los héroes simulados de la constante HEROES y agrega un mensaje al servicio de mensajes para registrar la acción de recuperar héroes.
*/








/*import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> { // remplacamo el get heroes()
    const heroes = of(HEROES);
    return heroes;
  }

  constructor() { }
}
*/