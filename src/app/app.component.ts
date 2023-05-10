import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'traductionEliot';
  switchLanguage(language: any) {
    console.log(language);
    // localStorage.setItem('language', language);
    // window.location.reload();
  }
}
