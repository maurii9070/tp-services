import { Component } from '@angular/core';
import { TranslateServiceService } from '../../services/translate-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parte-a',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parte-a.component.html',
  styleUrl: './parte-a.component.css',
})
export class ParteAComponent {
  idiomas = [
    { value: 'EN', name: 'Ingles' },
    { value: 'ES', name: 'Español' },
    { value: 'DE', name: 'Aleman' },
    { value: 'FR', name: 'Frances' },
    { value: 'IT', name: 'Italiano' },
  ];

  sourceLang: string;
  targetLang: string;
  text: string;
  translation: string;

  constructor(private translateService: TranslateServiceService) {
    this.sourceLang = 'EN';
    this.targetLang = 'ES';
    this.text = '';
    this.translation = '';
  }

  public translateText(): void {
    if (this.text === '' && this.sourceLang === '' && this.targetLang === '') {
      console.log('No se puede traducir un texto vacio');
      return;
    }
    this.translateService
      .getLanguajes(this.sourceLang, this.targetLang, this.text)
      .subscribe((response: any) => {
        this.translation = response.data.translations[0].translatedText;
      });
  }
}
