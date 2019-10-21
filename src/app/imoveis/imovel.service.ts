import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  allImoveis:Imovel[] = [
    {
      "id": "1",
      "endereco": "Lalit",
      "valor": "9999",
      "corretor": "Jorge",
      "proprietario": "Associate Lead"
    }
  ];
  getAllImoveis():Imovel[]{
      return this.allImoveis;
    }

    addImovel(imovel:Imovel){
      this.allImoveis.push(imovel);
    }

    updateImovel(imovel:Imovel){
      var updateImovel = this.allImoveis.find(emp => emp.id == imovel.id);
      updateImovel.endereco = imovel.endereco;
      updateImovel.valor = imovel.valor;
      updateImovel.corretor = imovel.corretor;
      updateImovel.proprietario = imovel.proprietario;
    }

    deleteImovel(id:string){
      this.allImoveis = this.allImoveis.filter(imovel => imovel.id != id);
    }

    getImovel(id:string):Imoveis{
      return this.allImoveis.find(emp => emp.id == id);
    }
  }
