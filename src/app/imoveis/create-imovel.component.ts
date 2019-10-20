import { ImoveisService } from "../imovel.service";
import { Imovel } from "imovel";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-create-imovel",
  templateUrl: "create-imovel.component.html",
  styleUrls: ["create-imovel.component.css"]
})
export class CreateImovelComponent implements OnInit {

  imovel: Imovel = new Imovel();
  submitted = false;

  constructor(private imovelService: ImovelService,
    private router: Router) { }

  ngOnInit() {
  }

  newImovel(): void {
    this.submitted = false;
    this.imovel = new Imovel();
  }

  save() {
    this.imovelService.createImovel(this.imovel)
      .subscribe(data => console.log(data), error => console.log(error));
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
