import { ImovelService } from "./imovel.service";
import { Imovel } from "./imovel";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-imovel',
  templateUrl: './update-imovel.component.html',
  styleUrls: ['./update-imovel.component.css']
})
export class UpdateImovelComponent implements OnInit {

  id: number;
  imovel: Imovel;

  constructor(private route: ActivatedRoute,private router: Router,
    private imovelService: ImovelService) { }

  ngOnInit() {
    this.imovel = new Imovel();

    this.id = this.route.snapshot.params['id'];

    this.imovelService.getImovel(this.id)
      .subscribe(data => {
        console.log(data)
        this.imovel = data;
      }, error => console.log(error));
  }

  updateImovel() {
    this.imovelService.updateImovel(this.id, this.imovel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.imovel = new Imovel();
    this.gotoList();
  }

  onSubmit() {
    this.updateImovel();
  }

  gotoList() {
    this.router.navigate(['/imoveis']);
  }
}
