import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TheToolbarContentComponent} from "./public/components/the-toolbar-content/the-toolbar-content.component";
import {TheFooterContentComponent} from "./public/components/the-footer-content/the-footer-content.component";
import {JokesCardComponent} from "./jokes/components/jokes-cards/jokes-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TheToolbarContentComponent, TheFooterContentComponent, JokesCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chucknorris-service';
}
