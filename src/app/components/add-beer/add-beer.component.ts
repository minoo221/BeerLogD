import {Component, OnInit, ViewChild} from '@angular/core';
import {Beer} from "../../models/Beer";
import {FlashMessagesService} from "angular2-flash-messages";
import {BeerService} from "../../services/beer.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent implements OnInit {
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
        fg: null,
        datum: null,
        pozRmutovanie: "",
        pozChmelovar: "",
        pozKvasenie: "",
        pozChut: "",
        ebc: null,
        oneStep: false,
        /*pozOMladiny: null,
        predOdpar: null,
        hRmutu: null,
        predOSladiny: null,
        predOHlNalevu: null,
        predOPredku: null,*/
    };

    oneStep: boolean = false;

    @ViewChild('beerForm') from: any;

    constructor (
        private router: Router,
        private beerService: BeerService,
        private flashMessage: FlashMessagesService
    ){
    }

    ngOnInit() {
    }

    onSubmit({value, valid}: { value: Beer, valid: boolean }) {
        if (!valid) {
            // Show error
            this.flashMessage.show('Prosím zadajte povinné údaje', {
                cssClass: 'alert-warn', timeauto: 4000,
            });
        } else {
            // Add new client
            this.beerService.newBeer(value);
            // Show message
            this.flashMessage.show('Údaje boli uspešne uložené', {
                cssClass: 'alert-success', timeauto: 4000
            });

            // Redirect to dashboars
            this.router.navigate(['/']);
        }
    }

    /*sladina(mladina, odpar) {
        let division = (1 - (odpar/100));
        return mladina / division;
    }

    roundD(value, precision) {
        let multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    predok(nalev, mSladu) {
        let multiplier = (mSladu * 1.3);
        return nalev - multiplier
    }*/

    /*onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }*/

    /*onUpload() {
        const fd = new FormData();
    }*/

}
