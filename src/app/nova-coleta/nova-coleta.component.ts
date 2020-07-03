import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-coleta',
  templateUrl: './nova-coleta.component.html',
  styleUrls: ['./nova-coleta.component.css']
})
export class NovaColetaComponent implements OnInit {

  constructor() { }

  br = {
    firstDayOfWeek: 0,
    dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
    monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    today: 'Hoje',
    clear: 'Limpar',
    dateFormat: 'mm/dd/yy',
    weekHeader: ''
  };

  dataPrevista: Date;


  ngOnInit(): void {
  }

}
