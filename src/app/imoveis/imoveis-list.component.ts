import { ImovelDetaisComponent } from '../employee-details/ImovelDetaisComponent';
import { Observable } from "rxjs";
import { ImoveisService } from "../imovel.service";
import { Imovel } from "imovel";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-imovel-list",
  templateUrl: "imovel-list.component.html",
  styleUrls: ["imovel-list.component.css"]
})
export class ImovelListComponent implements OnInit {
  imoveis: Observable<Imovel[]>;

  constructor(private ImovelService: ImovelService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.imoveis = this.imovelService.getImovelList();
  }

  deleteImovel(id: Bigint) {
    this.imovelService.deleteImovel(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  imovelDetails(id: Bigint){
    this.router.navigate(['details', id]);
  }
}
