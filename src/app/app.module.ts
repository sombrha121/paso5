import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [ // Declara los componentes que se utilizarán en la aplicación, incluyendo
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [ // Especifica los módulos importados en la sección
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  
  providers: [ //  La sección providers se utiliza para definir proveedores de servicios,
  // pero en este caso, debido a que se ha utilizado la opción providedIn al definir los servicios, no es necesario declarar proveedores aquí. 
    // no need to place any providers due to the `providedIn` flag...  indica a Angular que el servicio debe ser proporcionado en el módulo raíz por defecto.
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

 