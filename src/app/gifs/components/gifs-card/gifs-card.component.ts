import { Component, Input } from '@angular/core';
import { Gif } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html'
})
export class GifsCardComponent {

  @Input()
  public gif!: Gif;
}
