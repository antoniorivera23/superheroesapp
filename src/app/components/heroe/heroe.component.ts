import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent {

  heroe:any = {};


  constructor( private activatedRouter: ActivatedRoute,
               private _heroesServices: HeroesService
               ) {
    this.activatedRouter.params.subscribe ( params =>{
      //console.log(params['id'] );
      this.heroe = this._heroesServices.getHeroe( params ['id']);
      
    })
   }

}
