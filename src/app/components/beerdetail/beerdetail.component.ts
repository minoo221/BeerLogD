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
        this.ebcChanger(beer.ebc);
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

  ebcChanger(beer) {
      const color = document.getElementById("beer-ebc")
      switch (beer) {
          case 1:
              color.style.background="#ffe699";
              break;
          case 2:
              color.style.background="#ffd978";
              break;
          case 3:
              color.style.background="#ffca5a";
              break;
          case 4:
              color.style.background="#ffbf43";
              break;
          case 5:
              color.style.background="#fcb124";
              break;
          case 6:
              color.style.background="#f8a700";
              break;
          case 7:
              color.style.background="#f39c00";
              break;
          case 8:
              color.style.background="#ea8f00";
              break;
          case 9:
              color.style.background="#e68500";
              break;
          case 10:
              color.style.background="#de7c00";
              break;
          case 11:
              color.style.background="#d77200";
              break;
          case 12:
              color.style.background="#d06900";
              break;
          case 13:
              color.style.background="#ca6200";
              break;
          case 14:
              color.style.background="#c35901";
              break;
          case 15:
              color.style.background="#bb5000";
              break;
          case 16:
              color.style.background="#b64c00";
              break;
          case 17:
              color.style.background="#b04500";
              break;
          case 18:
              color.style.background="#a63e00";
              break;
          case 19:
              color.style.background="#a03700";
              break;
          case 20:
              color.style.background="#9c3200";
              break;
          case 21:
              color.style.background="#962d00";
              break;
          case 22:
              color.style.background="#8f2a00";
              break;
          case 23:
              color.style.background="#872300";
              break;
          case 24:
              color.style.background="#962d00";
              break;
          case 25:
              color.style.background="#811e00";
              break;
          case 26:
              color.style.background="#771900";
              break;
          case 27:
              color.style.background="#701400";
              break;
          case 28:
              color.style.background="#6a0e00s";
              break;
          case 29:
              color.style.background="#660d00";
              break;
          case 30:
              color.style.background="#5e0c00";
              break;
          case 31:
              color.style.background="#5a0a03";
              break;
          case 32:
              color.style.background="#600902";
              break;
          case 33:
              color.style.background="#530908";
              break;
          case 34:
              color.style.background="#4b0505";
              break;
          case 35:
              color.style.background="#460606";
              break;
          case 36:
              color.style.background="#440607";
              break;
          case 37:
              color.style.background="#3f0708";
              break;
          case 38:
              color.style.background="#3a0608";
              break;
          case 39:
              color.style.background="#3f0708";
              break;
          case 40:
              color.style.background="#3a080b";
              break;
          case 37:
              color.style.background="#3f0708";
              break;
          default:
              color.style.background="#000";
      }
  }

}
