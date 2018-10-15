import { Component, OnInit, Input } from '@angular/core';
import { Circle, SvgProperties } from '../models/models';



@Component({
  selector: 'app-diagram2',
  templateUrl: './diagram2.component.html',
  styleUrls: ['./diagram2.component.scss']
})
export class Diagram2Component implements OnInit {

  @Input('svgs') svgs: SvgProperties[];

  constructor() { }

  ngOnInit() {
    console.log(this.svgs);
  }
}
