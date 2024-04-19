import {Component, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {JokeServiceService} from "../../../shared/service/joke-service.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'the-toolbar-content',
  standalone: true,
  imports: [
    MatToolbar,
    NgOptimizedImage
  ],
  templateUrl: './the-toolbar-content.component.html',
  styleUrl: './the-toolbar-content.component.css'
})
export class TheToolbarContentComponent implements OnInit{
  urlLogo: string = '';
  constructor(private categoriesService:  JokeServiceService) {}
  ngOnInit(): void {
    this.getLogo();
  }

  getLogo(){
    this.categoriesService.getJoke().subscribe(data => {
         data.forEach((joke:any) => {
          if(joke.icon_url){
            this.urlLogo = joke.icon_url;
          }
          console.log(this.urlLogo);
         });
    });
  }
}
