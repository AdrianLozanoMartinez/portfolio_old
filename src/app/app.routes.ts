import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FootComponent } from './component/foot/foot.component';
import { HomeComponent } from './page/home/home.component';
import { DatospersonalesComponent } from './page/datospersonales/datospersonales.component';
import { FormacionComponent } from './page/formacion/formacion.component';
import { ConocimientosComponent } from './page/conocimientos/conocimientos.component';
import { ExperienciasComponent } from './page/experiencias/experiencias.component';

export  const ROUTES: Routes = [                    
   { path: '', component: HomeComponent },                
   { path: 'home', component: HomeComponent},   
   { path: 'foot', component: FootComponent},   
   { path: 'navbar', component: NavbarComponent},   
   { path: 'appcomponente', component: AppComponent },
   { path: 'datos', component: DatospersonalesComponent },
   { path: 'formacion', component: FormacionComponent },
   { path: 'conocimientos', component: ConocimientosComponent },
   { path: 'experiencias', component: ExperienciasComponent },
//    { path: '**', component: ErrorComponent},   
   { path: '**', pathMatch: 'full', redirectTo: 'home'},   
];