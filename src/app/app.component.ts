import { Component } from '@angular/core';

import { Music } from './music';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MusicPlayer';

  musicList: Music[] = [];
  displayedColumns: string[] = ['title', 'artist', 'album'];
  displayedRows: string[] = ['title', 'artist', 'album'];

}
