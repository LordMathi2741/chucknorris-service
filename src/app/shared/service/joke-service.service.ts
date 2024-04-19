import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, switchMap} from 'rxjs/operators';
import {environmentJokes} from "../../environments/environment-jokes";
import {JokeCategoryService} from "../../jokes/service/joke-category.service";
import {forkJoin} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JokeServiceService {
  constructor(private http: HttpClient, private jokeCategoryService: JokeCategoryService) {
  }

  getJoke() {
    return this.jokeCategoryService.getCategories().pipe(
      map(categories => {
        return categories.map(category => {
          return `${environmentJokes.apiUrl}${category}`;
        });
      }),
      switchMap(apiUrls => {
        const requests = apiUrls.map(apiUrl => {
          return this.http.get(apiUrl);
        });
        return forkJoin(requests)
      })
    );
  }
}
