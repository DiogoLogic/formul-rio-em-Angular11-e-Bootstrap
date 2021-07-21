import { Component, OnInit, Output } from '@angular/core';

import { QuestionsService } from 'src/app/services/questions.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.css']
})
export class OpcoesComponent implements OnInit {

  questions: any = [];
  questionsAtual: any;
  valorTotal = 0.0;
  pagina = 0;
  @Output() resultFinal: any;


  constructor(
    public questionsService: QuestionsService,
    private _location: Location,

  ) { }

  ngOnInit(): void {
    this.getQuestions();
    console.log(this.resultFinal)
  }
  
    getQuestions() {
    this.questions = <any[]>this.questionsService.questions().data.questions;
    this.loadQuestions();
  }

  loadQuestions() {
    if (this.questions.length > 0) {
      this.questionsAtual = this.questions.shift();
      this.pagina++;
    } else if (this.questions !== undefined) {
      this.questionsAtual = this.questions.shift();
      this.pagina++;
      this.questions = undefined;
    }
  }

  calcularValor(event: any) {
    if (this.questions.length > 0) {
      this.valorTotal = this.valorTotal + event;
      this.resultFinal = this.valorTotal
    }
  }
  
  goBack() {
    this._location.back()
  }
}



