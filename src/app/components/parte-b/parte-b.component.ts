import { Component } from '@angular/core';
import { NewsServicesService } from '../../services/news-services.service';

@Component({
  selector: 'app-parte-b',
  standalone: true,
  imports: [],
  templateUrl: './parte-b.component.html',
  styleUrl: './parte-b.component.css',
})
export class ParteBComponent {
  news: any[] = [];
  seleccionada: any;

  constructor(private newsService: NewsServicesService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data: any) => {
      this.news = data.articles;
    });
  }

  seleccionarNoticia(noticia: any): void {
    this.seleccionada = noticia;
  }
}
