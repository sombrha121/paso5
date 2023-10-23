// Importamos las dependencias necesarias para realizar las pruebas.
import { TestBed } from '@angular/core/testing';

// Importamos el servicio que queremos probar, en este caso, 'HeroService'.
import { HeroService } from './hero.service';

// Comenzamos la descripción de las pruebas para 'HeroService'.
describe('HeroService', () => {
  // Declaramos una variable 'service' que almacenará una instancia del servicio 'HeroService'.
  let service: HeroService;

  // Antes de cada prueba, configuramos el entorno de pruebas.
  beforeEach(() => {
    TestBed.configureTestingModule({});
    // Obtenemos una instancia del servicio 'HeroService' usando 'TestBed' y la asignamos a la variable 'service'.
    service = TestBed.inject(HeroService);
  });

  // Especificamos la primera prueba: el servicio debe ser creado correctamente.
  it('should be created', () => {
    // Utilizamos 'expect' para verificar si la variable 'service' existe y no es 'null'.
    expect(service).toBeTruthy();
  });
});
