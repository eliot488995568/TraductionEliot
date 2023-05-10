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
    console.log("test",this.language);
    localStorage.setItem('language', language);
    window.location.reload();
  }
}
