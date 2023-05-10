import { Component, NgModule, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // constructor(@Inject(LOCALE_ID) private localeId: string) {}

  title = 'traductionEliot';
  language: string = 'en';

  switchLanguage(language: any) {
    this.language = language.value;
    console.log(this.language);
    if (this.language == 'en') {
      // si language = en, on affiche le texte en anglais
    } else if(this.language == 'fr') {
      // si language = fr, on affiche le texte en français
    } else if(this.language == 'es') {
      // si language = es, on affiche le texte en espagnol
    } else {
      alert('error');
    }
  }
}
