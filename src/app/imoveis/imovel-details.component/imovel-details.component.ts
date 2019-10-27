import { Imovel } from '../imovel';
import { Component, OnInit, Input } from '@angular/core';
import { ImovelService } from '../imovel.service';
import { ImovelList } from '../imovel-list.component/imovel-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imovel-details',
  templateUrl: './imovel-details.component.html',
  styleUrls: ['./imovel-details.component.css']
})
export class ImovelDetails implements OnInit {

  id: number;
  imovel: Imovel;

  constructor(private route: ActivatedRoute,private router: Router,
    private imovelService: ImovelService) { }

  ngOnInit() {
    this.imovel = new Imovel();

    this.id = this.route.snapshot.params['id_imovel'];

    this.imovelService.ImovelDetails(this.id)
      .subscribe(data => {
        console.log(data)
        this.imovel = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['imoveis']);
  }
}
