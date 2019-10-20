import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateImovelComponent } from './imoveis/create-imovel.component';
import { ImovelDetailsComponent } from './imoveis/imovel-details.component';
import { ImovelListComponent } from './imoveis/imovel-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateImovelComponent } from './imoveis/update-imovel.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateImovelComponent,
    ImovelDetailsComponent,
    ImovelListComponent,
    UpdateImovelComponent
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
