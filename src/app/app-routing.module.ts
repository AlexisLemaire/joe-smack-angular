import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecetteAjoutComponent } from './recette-ajout/recette-ajout.component';
import { RecetteDeleteComponent } from './recette-delete/recette-delete.component';
import { RecetteListComponent } from './recette-list/recette-list.component';
import { RecetteUpdateComponent } from './recette-update/recette-update.component';
import { RecetteComponent } from './recette/recette.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "recette-list/:type", component: RecetteListComponent },
  { path: "recette-ajout", component: RecetteAjoutComponent },
  { path: "recette-update/:id", component: RecetteUpdateComponent },
  { path: "recette-delete/:id", component: RecetteDeleteComponent },
  { path: "recette/:id", component: RecetteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
