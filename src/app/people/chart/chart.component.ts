import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild('chartTarget') chartTarget: ElementRef;
  @Input() data;

  rangeOfage = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Relatório por gênero'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Nº de indivíduos',
      data: [{
        name: 'Mulheres',
        y: 4
      }, {
        name: 'Homens',
        y: 6
      }
      , {
        name: 'Gays',
        y: 3
      },
      {
        name: 'Não binare',
        y: 3
      }]
    }]
  });

  chart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Relatório por sexo'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Nº de indivíduos',
      data: [{
        name: 'Mulheres',
        y: 4
      }, {
        name: 'Homens',
        y: 6
      }]
    }]
  });

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }
}
