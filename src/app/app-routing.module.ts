import { ImovelDetails } from './imoveis/imovel-details.component';
import { CreateImovel } from './imoveis/create-imovel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImovelList } from './imoveis/imovel-list.component';
import { UpdateImovel } from './imoveis/update-imovel.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'imoveis', component: ImovelList },
  { path: 'add', component: CreateImovel },
  { path: 'update/:id', component: UpdateImovel },
  { path: 'details/:id', component: ImovelDetails },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
