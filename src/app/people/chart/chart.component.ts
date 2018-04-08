import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { PersonModel } from '../../models/person.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild('chartTarget') chartTarget: ElementRef;
  @Input() data: PersonModel[];
  byGenderChart: Chart;
  byAgeChart: Chart;
  type = 'pie';

  constructor() { }

  ngOnInit() {
    this.ageData();
    this.genderData();
  }

  fillAgeChartData(data: PersonModel[]) {
    const serieData: any = [{
      name: '0 a 9',
      y: 0
    }, {
      name: '10 a 19',
      y: 0
    }, {
      name: '20 a 29',
      y: 0
    }, {
      name: '30 a 39',
      y: 0
    }, {
      name: 'Maior que 40',
      y: 0
    }];

    data.sort();
    for (let i = 0; i < data.length; i++) {
      if (data[i].age > 39) {
        serieData[4].y = serieData[4].y + 1;
        continue;
      }

      if (data[i].age < 10) {
        serieData[0].y = serieData[0].y + 1;
        continue;
      }

      if (data[i].age >= 0 && (data[i].age < 10)) {
        serieData[0].y = serieData[0].y + 1;
        continue;
      }

      if (data[i].age >= 10 && (data[i].age < 20)) {
        serieData[1].y = serieData[1].y + 1;
        continue;
      }

      if (data[i].age >= 20 && (data[i].age < 30)) {
        serieData[2].y = serieData[2].y + 1;
        continue;
      }

      serieData[3].y = serieData[3].y + 1;
    }

    return serieData;
  }

  fillGenderChartData(data: PersonModel[]) {
    const serieData: any = [
      { name: 'Homens', y: 0 },
      { name: 'Mulheres', y: 0 }
    ];

    for (let i = 0; i < data.length; i++) {
      if (data[i].gender) {
        serieData[0].y = serieData[0].y + 1;
      } else {
        serieData[1].y = serieData[1].y + 1;
      }
    }

    return serieData;
  }

  genderData() {
    this.byGenderChart = new Chart({
      chart: {
        type: this.type
      },
      title: {
        text: 'Separação por sexo'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['Homens', 'Mulheres']
      },
      series: [{
        name: 'Nº de indivíduos',
        data: this.fillGenderChartData(this.data)
      }]
    });
  }

  ageData() {
    this.byAgeChart = new Chart({
      chart: {
        type: this.type
      },
      title: {
        text: 'Separação por idade'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['0 a 9', '10 a 19', '20 a 29', '30 a 39', 'Maior que 40']
      },
      series: [{
        name: 'Nº de indivíduos',
        data: this.fillAgeChartData(this.data)
      }]
    });
  }

  chartType(v: boolean) {
    if (this.type === 'column') {
      this.type = 'pie';
    } else {
      this.type = 'column';
    }

    if (v) {
      this.ageData();
    } else {
      this.genderData();
    }
  }
}
