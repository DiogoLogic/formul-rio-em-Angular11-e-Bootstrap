import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit, OnChanges {
  @Input() receberFinal: any;

  constructor() { }

  ngOnChanges() {
    this.receberFinal
    console.log(this.receberFinal)
  }
  ngOnInit() {

  }

}
