import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ParteAComponent } from './components/parte-a/parte-a.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParteAComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tp-webservice-4857';
}
