import { ImovelService } from "../imovel.service";
import { Imovel } from "../imovel";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-create-imovel",
  templateUrl: "create-imovel.component.html",
  styleUrls: ["create-imovel.component.css"]
})
export class CreateImovel implements OnInit {

  imovel: Imovel;
  submitted = false;

  constructor(private imovelService: ImovelService,
    private router: Router) { }

  ngOnInit() {
  }

  newImovel() {
    this.submitted = false;
    this.imovel = new Imovel();
  }

  save() {
    this.imovelService.CreateImovel(this.imovel);
    this.imovel = new Imovel();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/imoveis']);
  }
}
