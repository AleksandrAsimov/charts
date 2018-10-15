import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {

  public chartType = 'doughnut';

  public chartData: Array<any> = [30, 50, 100, 40, 120];

  public chartLabels: Array<any> = ['Rd', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  public chartColors: Array<any> = [{
    hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
    hoverBorderWidth: 0,
    backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
    hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
  }];

  public chartOptions: any = {
    responsive: false
  };
  constructor() { }

  ngOnInit() {

  }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
