import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post:{
    id:string;
    titlePost:string;
    contentPost:string;
    imagePost:string;
  }={
    id:'1',
    titlePost:'Post one',
    contentPost:'hola mundo',
    imagePost: 'https://picsum.photos/id/237/200/300'
  }

  //para obtener el parametro pasado por la ruta
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=>{
        //asignado al post el id obtenido de la ruta
        this.post.id=params.get('id')
      }
    )
  }

}
