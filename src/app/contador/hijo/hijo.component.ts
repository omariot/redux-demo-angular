import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as fromContador from '../contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
      this.store.select('contador').subscribe( contador =>  this.contador = contador );
  }

  multiplicar() {
    const accion = new fromContador.MultiplicarAction(5);
    this.store.dispatch( accion );
  }

  dividir() {
    const accion = new fromContador.DividirAction(5);
    this.store.dispatch( accion );
  }

}
