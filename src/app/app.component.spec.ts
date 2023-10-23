// Importamos las dependencias necesarias para realizar las pruebas.
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
// AQUI NO SE MODIFICO NADA
// Comenzamos la descripción de las pruebas para 'AppComponent'.
describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

  // Especificamos la primera prueba: el componente debe ser creado correctamente.
  it('should create the app', () => {
    // Creamos una instancia del componente 'AppComponent' usando 'TestBed'.
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Verificamos si la instancia del componente no es 'null'.
    expect(app).toBeTruthy();
  });

  // Especificamos la segunda prueba: el componente debe tener el título correcto.
  it(`should have as title 'angular-tour-of-heroes'`, () => {
    // Creamos una instancia del componente 'AppComponent' usando 'TestBed'.
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Verificamos si el título del componente es igual al valor esperado.
    expect(app.title).toEqual('angular-tour-of-heroes');
  });

  // Especificamos la tercera prueba: el título debe ser renderizado correctamente.
  it('should render title', () => {
    // Creamos una instancia del componente 'AppComponent' usando 'TestBed'.
    const fixture = TestBed.createComponent(AppComponent);
    // Detectamos los cambios en el componente.
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Verificamos si el título se renderiza correctamente en el elemento HTML.
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-tour-of-heroes app is running!');
  });
});
