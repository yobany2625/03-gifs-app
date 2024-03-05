import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'gift-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  constructor(private gifsService: GifsService){}

  get gifs():Gif[]{
    return this.gifsService.datalListGifs;
  }
}
