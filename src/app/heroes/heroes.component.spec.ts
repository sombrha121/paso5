import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent; // Declaramos una variable para el componente 'HeroesComponent'.
  let fixture: ComponentFixture<HeroesComponent>; // Declaramos una variable para la instancia del componente 'HeroesComponent'.

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent] // Configuramos el módulo de prueba con el componente 'HeroesComponent'.
    });
    fixture = TestBed.createComponent(HeroesComponent); // Creamos una instancia del componente 'HeroesComponent' para pruebas.
    component = fixture.componentInstance; // Obtenemos la instancia del componente desde el fixture.
    fixture.detectChanges(); // Detectamos cambios en el componente.
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Prueba que el componente se haya creado exitosamente.
  });
});
