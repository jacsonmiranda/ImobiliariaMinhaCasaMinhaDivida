import { ImovelDetailsComponent } from './imoveis/imovel-details.component';
import { CreateImovelComponent } from './imoveis/create-imovel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImovelListComponent } from './imoveis/imovel-list.component';
import { UpdateImovelComponent } from './imoveis/update-imovel.component';

const routes: Routes = [
  { path: '', redirectTo: 'imovel', pathMatch: 'full' },
  { path: 'imoveis', component: ImovelListComponent },
  { path: 'add', component: CreateImovelComponent },
  { path: 'update/:id', component: UpdateImovelComponent },
  { path: 'details/:id', component: ImovelDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
