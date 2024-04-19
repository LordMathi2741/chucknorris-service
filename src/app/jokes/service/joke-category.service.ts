import { Injectable } from '@angular/core';
import {environmentJokeCategory} from "../../environments/environment-joke-category";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeCategoryService {
  baseUrl = environmentJokeCategory.apiUrl;
  constructor(private http: HttpClient) {}
  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl);
  }
}
