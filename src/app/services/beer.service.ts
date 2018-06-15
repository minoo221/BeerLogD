import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

import {Beer} from "../models/Beer";

@Injectable()
export class BeerService {
  beersCollection: AngularFirestoreCollection<Beer>;
  beerDoc: AngularFirestoreDocument<Beer>;
  beers: Observable<Beer[]>;
  beer: Observable<Beer>;

  constructor(
      private afs: AngularFirestore
  ) {
    this.beersCollection = this.afs.collection('brewNotes', ref => ref.orderBy('nazovPiva', 'asc'));
  }

  getBeers(): Observable<Beer[]> {
    //Get clients with the id
      this.beers = this.beersCollection.snapshotChanges().map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Beer;
          data.id = action.payload.doc.id;
          return data;
          });
      });

      return this.beers;
  }

  newBeer(beer: Beer) {
    this.beersCollection.add(beer);
  }

    getBeer(id: string): Observable<Beer> {
        this.beerDoc = this.afs.doc<Beer>(`brewNotes/${id}`);
        this.beer = this.beerDoc.snapshotChanges().map(action => {
            if(action.payload.exists === false) {
                return null;
            } else {
                const data = action.payload.data() as Beer;
                data.id = action.payload.id;
                return data;
            }
        });
        return this.beer;
    }

    updateBeer(beer: Beer) {
        this.beerDoc = this.afs.doc(`brewNotes/${beer.id}`);
        this.beerDoc.update(beer)
    }

    deleteBeer(beer: Beer) {
        this.beerDoc = this.afs.doc(`brewNotes/${beer.id}`);
        this.beerDoc.delete();
    }

    predok(nalev, mSladu) {
        let multiplier = (mSladu * 1.3);
        return nalev - multiplier
    }

}
