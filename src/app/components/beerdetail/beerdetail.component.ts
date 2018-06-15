import { Component, OnInit } from '@angular/core';
import {BeerService} from "../../services/beer.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";


import {Beer} from "../../models/Beer";

@Component({
  selector: 'app-beerdetail',
  templateUrl: './beerdetail.component.html',
  styleUrls: ['./beerdetail.component.css']
})
export class BeerdetailComponent implements OnInit {
  id: string;
  beer: Beer;

  constructor(
      private beerService: BeerService,
      private router: Router,
      private route: ActivatedRoute,
      private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
      // Get id from url
      this.id = this.route.snapshot.params['id'];
      // Get client
      this.beerService.getBeer(this.id).subscribe(beer => {
        this.beer = beer;
      });
  }

  onDeleteClick() {
      if(confirm('Ste si istý?')) {
          this.beerService.deleteBeer(this.beer);
          this.flashMessage.show("Pivo bolo úspešne vymazané", {
              cssClass: 'alert-success', timeout: 4000
          });
          this.router.navigate(['/'])
      }
  }

}
