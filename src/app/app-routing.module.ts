import { ImovelDetailsComponent } from './imovel/imovel-details.component';
import { CreateImovelComponent } from './imovel/create-imovel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImovelListComponent } from './imovel/imovel-list.component';
import { UpdateImovelComponent } from './imovel/update-imovel.component';

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
