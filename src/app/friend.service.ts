import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  names = ['Patrick'];
  images = ['assets/img/hamster/5.jpg'];
  texts = ['2 Jahre alt'];

  constructor() { }

  addFriend(name: string, text: string, image: string) {
    this.names.push(name);
    this.images.push(image);
    this.texts.push(text);
  }
}
