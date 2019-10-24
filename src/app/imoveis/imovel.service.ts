import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  constructor(private http: HttpClient) { }

  templateUrl: string = 'http://localhost:8080/imoveis';

  ImovelList():Observable<HttpClient>{
    return this.http.get(this.templateUrl);
  }

  ImovelDetails(id_imovel: number): Observable<HttpClient> {
    return this.http.get<HttpClient>(this.baseUrl + id_imovel);
  }

  CreateImovel(id_imovel: String): Observable<HttpClient> {
    return this.http.post<HttpClient>(this.baseUrl, id_imoveld);
  }

  UpdateImovel(id_imovel: String): Observable<HttpClient> {
    return this.http.put<HttpClient>(this.baseUrl + id_imoveld);
  }

  deleteImovel(id_imoveld: String): Observable<HttpClient> {
    return this.http.delete<HttpClient>(this.baseUrl + id_imoveld);
  }

}
