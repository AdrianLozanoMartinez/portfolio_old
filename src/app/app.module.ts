import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';  

//Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FootComponent } from './component/foot/foot.component';
import { HomeComponent } from './page/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { DatospersonalesComponent } from './page/datospersonales/datospersonales.component';
import { FormacionComponent } from './page/formacion/formacion.component';
import { ConocimientosComponent } from './page/conocimientos/conocimientos.component';
import { ExperienciasComponent } from './page/experiencias/experiencias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootComponent,
    HomeComponent,
    ErrorComponent,
    DatospersonalesComponent,
    FormacionComponent,
    ConocimientosComponent,
    ExperienciasComponent
  ],
  imports: [
    BrowserModule,
    //Routes
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
