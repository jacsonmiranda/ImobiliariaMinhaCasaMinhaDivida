import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateImovel } from './imoveis/create-imovel.component/create-imovel.component';
import { ImovelDetails } from './imoveis/imovel-details.component/imovel-details.component';
import { ImovelList } from './imoveis/imovel-list.component/imovel-list.component';
import { UpdateImovel } from './imoveis/update-imovel.component/update-imovel.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateImovel,
    ImovelDetails,
    ImovelList,
    UpdateImovel
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
