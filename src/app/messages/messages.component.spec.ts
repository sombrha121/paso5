import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
  let component: MessagesComponent; // Declaramos una variable para el componente 'MessagesComponent'.
  let fixture: ComponentFixture<MessagesComponent>; // Declaramos una variable para la instancia del componente 'MessagesComponent'.

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponent] // Configuramos el módulo de prueba con el componente 'MessagesComponent'.
    });
    fixture = TestBed.createComponent(MessagesComponent); // Creamos una instancia del componente 'MessagesComponent' para pruebas.
    component = fixture.componentInstance; // Obtenemos la instancia del componente desde el fixture.
    fixture.detectChanges(); // Detectamos cambios en el componente.
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Prueba que el componente se haya creado exitosamente.
  });
});
