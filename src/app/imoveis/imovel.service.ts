import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  constructor(private http: HttpClient) { }

  templateUrl: string = 'http://localhost:8080/imoveis';

  GetImovelList():Observable<HttpClient>{
    return this.http.get(this.templateUrl);
  }

  ImovelDetails(id_imovel: number): Observable<any> {
    return this.http.get<any>(this.templateUrl + id_imovel);
  }

  CreateImovel(id_imovel: String): Observable<any> {
    return this.http.post<any>(this.templateUrl, id_imoveld);
  }

  UpdateImovel(id_imovel: String): Observable<any> {
    return this.http.put<any>(this.templateUrl + id_imoveld);
  }

  deleteImovel(id_imoveld: String): Observable<any> {
    return this.http.delete<any>(this.templateUrl + id_imoveld);
  }

}
