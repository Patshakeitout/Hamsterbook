import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {

  names = ['Patrick', 'Tom', 'Klaas', 'Sonja'];
  images = ['assets/img/hamster/5.jpg', 'assets/img/hamster/6.jpg', 'assets/img/hamster/7.jpg', 'assets/img/hamster/8.jpg'];
  texts = ['2 Jahre alt','Hamsterfreak','spiele gerne','esse gerne'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
