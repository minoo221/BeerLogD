import { Component, OnInit, ViewChild} from '@angular/core';
import {BeerService} from "../../services/beer.service";
import {Beer} from "../../models/Beer";
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})

export class BeersComponent implements OnInit {
  beers: Beer[];
  displayedColumns = ['nazovPiva', 'hMladiny', 'abv', 'mSladu', 'datum' ];
  plato:boolean;
  count: number;

  dataSource = new MatTableDataSource(this.beers);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getBeers().subscribe(beers => {
      this.beers = beers;
      this.count = beers.length;
    });

  }

  multyplyi(sg:number) {
      let val = (sg - 1) / 4;
      return val * 1000;
  }

  round(value, precision) {
      let multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
  }

    getAbv(og, fg) {
        let division = (og - fg) * 1000;
        if(fg === 0) {
            return 0
        }
        return division / 7.45;
    }

}