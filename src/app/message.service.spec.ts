import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

// Esta sección describe la suite de pruebas para el servicio MessageService.
describe('MessageService', () => {
  // Declaramos una variable para almacenar una instancia del servicio.
  let service: MessageService;

  // Antes de ejecutar cada prueba, configuramos el entorno de prueba.
  beforeEach(() => {
    TestBed.configureTestingModule({});
    // Creamos una instancia del servicio utilizando TestBed.
    service = TestBed.inject(MessageService);
  });

  // Definimos una prueba específica.
  it('should be created', () => {
    // Afirmamos que la instancia del servicio no sea nula, lo que significa que el servicio se ha creado con éxito.
    expect(service).toBeTruthy();
  });
});
