import {Component, OnInit} from '@angular/core';
import {JokeServiceService} from "../../../shared/service/joke-service.service";
import {Joke} from "../../model/joke.entity";
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'jokes-cards',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent
  ],
  templateUrl: './jokes-card.component.html',
  styleUrl: './jokes-card.component.css'
})
export class JokesCardComponent implements OnInit {
     jokeData: Joke;
     jokes: Joke[] = [];
    constructor(private categoriesService:  JokeServiceService) {
      this.jokeData = {} as Joke;
    }
    ngOnInit(): void {
      this.getAll();
    }

    getAll(){
      this.categoriesService.getJoke().subscribe(data => {
          data.forEach((joke:any) => {
            this.jokeData = new Joke(joke.id,joke.value, joke.categories);
            this.jokes.push(this.jokeData);
          })
      });
    }

}
