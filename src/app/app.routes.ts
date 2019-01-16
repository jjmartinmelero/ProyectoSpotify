import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { ErrorComponent } from './components/error/error.component';

export const ROUTES:Routes = [
  {path:'home', component:HomeComponent},
  {path:'search', component:SearchComponent},
  {path:'error', component:ErrorComponent},
  {path:'artist/:id', component:ArtistaComponent},
  {path:'', pathMatch:'full',redirectTo:'home'},//cualquier path
  {path:'**', pathMatch:'full',redirectTo:'home'}
];
