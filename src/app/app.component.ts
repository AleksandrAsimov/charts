import { Component } from '@angular/core';
import { SvgProperties } from './models/models';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public svgs = [
    new SvgProperties([2344], ['#90D749'], 5430, 1),
    new SvgProperties([543], ['#E4983A'], 3321, 1),
    new SvgProperties([84], ['#42AED4'], 195, 2),
    new SvgProperties([3452], ['#92D749'], null, 3, 'Consultants'),
    new SvgProperties([1678], ['#F0CC54'], 1678, 3, 'Managers'),
    new SvgProperties([26.9, 53.8, 53.8, 134.5], ['#90D749', '#E4983A', '#F0CC54', '#42AED4'], 269, 4, 'Total All')

  ];

  constructor() {

  }

}
