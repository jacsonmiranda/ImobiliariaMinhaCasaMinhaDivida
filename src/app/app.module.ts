import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateImovelComponent } from './imovel/create-imovel.component';
import { ImovelDetailsComponent } from './imovel/imovel-details.component';
import { ImovelListComponent } from './imovel/imovel-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateImovelComponent } from './imovel/update-imovel.component';
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
