import { Component, Input } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input()
  public tagInput: string[] = [];
  constructor(private gifsService: GifsService) {

  }

  public get tags() {
    return this.gifsService.tagsHistory;
  }

  reBuscar(tag: string): void {
    this.gifsService.searchTag(tag);
  }


}
