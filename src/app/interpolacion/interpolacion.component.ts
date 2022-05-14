import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {
  notaMayor=false;
  birthday= new Date (1991, 10, 6);
  valuecap= 'Giuliana'

  constructor() { }

  ngOnInit(): void {
    console.log(this.birthday)
  }

}
