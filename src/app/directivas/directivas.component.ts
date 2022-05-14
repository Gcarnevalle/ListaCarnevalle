import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  propertyToCheck=1;
  boolToCheck=true;
  fecha= new Date ();
  aprobo:boolean = false;
  divM:boolean=false;
  
  estudiantes=[
    {nombre:'Ricardo',
    nota:7,
    curso: 'Angular',
    Aprobo:true,
 
  },
    {nombre: 'Martina',
    nota:10,
    curso: 'React',
    Aprobo:true,
  },
    {nombre:'Jose',
    nota:1,
    curso: 'Vue',
    Aprobo:false,
  },
   {nombre:'Lucas',
    nota:4,
    curso: 'React',
    Aprobo:false,
},
  {nombre: 'Juana',
   nota:8,
   curso: 'Vue',
   Aprobo:true,
},
  {nombre:'Micaela',
   nota:3,
   curso: 'Angular',
   Aprobo:false,
}
]

  edad!: number;

  constructor() { }
  ngOnInit(): void {
  }
  div1Function(){
    this.divM=true;  
  } 
  div2Function(){
    this.divM=false;
}

}
