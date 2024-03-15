import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-angular-project';
  postTexts = [
    'Hallo, mein Name is Frederik! Ich bin hier, um neue Freunde zu treffen.',
    'Hallo zusammen, freut mich, dass Ihr hier seid.',
    'Hallo, mein Name ist Susanne und ich bin 2 Jahre alt.',
    'Hallo, ich esse gerne Kekse.',
    'Moin, ich bin ein norddeutscher Hamster und heisse Thorge.',
    'Servus, ich bin der Anton und komme aus Bayern.',
    'Hallihallo, ich bin Maria und freue mich, Euch kennenzulernen!',
    'Moin, ich bin Tom und komme aus Flensburg.',
    'Hallo, ich bin der Muha-Hamster Brad und mag Musik!',
    'Ich bin Susu und esse gern Suppen!',
    'Berti mein Name und esse gerne scharfe Schokolade.',
    'Mein Name ist Hans und ich mag Fussball im Wald.'
  ];
}