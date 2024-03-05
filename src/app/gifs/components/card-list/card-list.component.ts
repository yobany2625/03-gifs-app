import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html'
})
export class CardListComponent implements OnInit {

  @Input()
  public dateGifs: Gif[] = [];
  ngOnInit(): void {
    if (!this.dateGifs) throw new Error('Gif property is required')
  }

}
