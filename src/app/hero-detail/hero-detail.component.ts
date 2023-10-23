import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importamos ActivatedRoute
import { Location } from '@angular/common'; // Importamos Location
import { Hero } from '../hero'; // Importamos la interfaz Hero
import { HeroService } from '../hero.service'; // Importamos el servicio HeroService

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined; // Declaramos una propiedad hero de tipo Hero o undefined

  constructor(
    private route: ActivatedRoute, // Inyectamos ActivatedRoute para acceder a la información de la ruta
    private heroService: HeroService, // Inyectamos HeroService para obtener los detalles del héroe
    private location: Location // Inyectamos Location para interactuar con el historial de navegación
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Obtenemos el id del héroe desde la ruta
    this.heroService.getHero(id) // Usamos el servicio para obtener el héroe por id
      .subscribe(hero => this.hero = hero); // paso 5 parte 12 Asignamos el héroe obtenido a la propiedad hero
  }

  goBack(): void {
    this.location.back();// paso 5 parte 15 agregamos el boton para ir atras de la pagina
  } // Utilizamos Location para volver a la vista anterior
  }

