import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'traductionEliot';
  language: string = 'en';

  switchLanguage(language: any) {
    this.language = language.value;
    console.log(this.language);
    if (this.language) {
      // this.localeId = this.language;
      localStorage.setItem('locale', this.language);
      location.reload();
    } else {
      alert('error');
    }
  }
}
