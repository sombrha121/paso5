import { NgModule } from '@angular/core'; // remplazamo el codigo original   se añadio  const routes P5 s1
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; //paso 5 parte 5 agreagamos una ruta detallada del heroe
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }, // esta es la ruta  es parte del archivo de configuracion indicada al enruttado que vista mostrar cuando el usuario hace clic
  { path: 'dashboard', component: DashboardComponent }, // p5 part 3 Agregamos esta línea la ruta del panel
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // p5 parte 4 agregarmo una ruta predeterminada
  { path: 'detail/:id', component: HeroDetailComponent }, //p5 parte 6 añadimos la matriz que coindia con el paso 5
  { path: 'heroe', component: HeroesComponent },
  { path: 'heroes', component: HeroesComponent }

  
];

@NgModule({
  //método proporciona los proveedores de servicios y las directivas necesarias para el enrutamiento y realiza la navegación inicial según la URL actual del navegador.
  imports: [RouterModule.forRoot(routes)], //
  exports: [RouterModule] //pRoutingModulelas exportaciones RouterModuleestarán disponibles en toda la aplicación. 
  
})
export class AppRoutingModule { } 