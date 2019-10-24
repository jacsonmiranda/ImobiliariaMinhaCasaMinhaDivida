import { ImovelDetails } from './imovel-details.component';
import { Observable } from "rxjs";
import { ImovelService } from "./imovel.service";
import { Imovel } from "./imovel";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-imovel-list",
  templateUrl: "imovel-list.component.html",
  styleUrls: ["imovel-list.component.css"]
})
export class ImovelList implements OnInit {
  imoveis: Observable <Imovel[]>;

  constructor(private imovelService: ImovelService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.imoveis = this.imovelService.getImoveisList();
  }

  deleteImovel(id_imovel: number) {
    this.imovelService.deleteImovel(number)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  imovelDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
