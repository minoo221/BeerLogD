import { Component, OnInit } from '@angular/core';
import {BeerService} from "../../services/beer.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";


import {Beer} from "../../models/Beer";

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent implements OnInit {
  id: string;
  beer: Beer = {
      nazovPiva: "",
      mSladu: null,
      vHlNalevu: null,
      vystierka: null,
      lowCarbTemp: null,
      lowCarbTime: null,
      highCarbTemp: null,
      highCarbTime: null,
      oneStepTemp: null,
      oneStepTime: null,
      odRmutTemp: null,
      odRmutTime: null,
      objemPredku: null,
      objemVyslVody: null,
      vPredChmel: null,
      hSliadiny: null,
      chmelovar: null,
      hMladiny: null,
      vMladiny: null,
      fg: null
  };

  oneStep: boolean = false;

  constructor(
      private beerService: BeerService,
      private router: Router,
      private route: ActivatedRoute,
      private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
      // Get id from url
      this.id = this.route.snapshot.params['id'];
      // Get beer
      this.beerService.getBeer(this.id).subscribe(beer => {
          this.beer = beer;
      });
  }

  onSubmit({value, valid}: {value: Beer, valid: boolean}) {
    if(!valid) {
      this.flashMessage.show("Prosím vyplnte polia správne", {
        cssClass: 'alert-warn', timeout: 4000
      });
    } else {
        // Add id to beer
        value.id = this.id
        // Update beer
        this.beerService.updateBeer(value);
        this.flashMessage.show("Polia boli úspešne upravené", {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/beer/'+this.id])
    }
  }

}
