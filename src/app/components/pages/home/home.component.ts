import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts:{
    id: string;
    titlePost:string;
    contentPost: string;
    imagePost:string;
  }[]=[
    {
      id:'1',
      titlePost:'Post one',
      contentPost:`is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
      imagePost: 'https://picsum.photos/id/237/200/300'
    },
    {
      id:'2',
      titlePost:'Post two',
      contentPost:`is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
      imagePost: 'https://picsum.photos/id/237/200/300'
    },
    {
      id:'3',
      titlePost:'Post three',
      contentPost:`is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
      imagePost: 'https://picsum.photos/id/237/200/300'
    },
    {
      id:'4',
      titlePost:'Post four',
      contentPost:`is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
      imagePost: 'https://picsum.photos/id/237/200/300'
    },
    {
      id:'5',
      titlePost:'Post five',
      contentPost:`is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
      imagePost: 'https://picsum.photos/id/237/200/300'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
