import { Component } from '@angular/core';

import { Music } from './music';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MusicPlayer';
  audio = new Audio();

  musicList: Music[] = [
    {
      album: "YouTube",
      title: "Premaye",
      artist: "Gangadara",
      url: "Premaye.mp3"
    },
    {
      album: "YouTube",
      title: "Noriko",
      artist: "Gangadara",
      url: "Noriko.mp3"
    },
    {
      album: "YouTube",
      title: "Hadawathak",
      artist: "Gangadara",
      url: "Hadawathak.mp3"
    },
  ];
  displayedColumns: string[] = ['title', 'artist', 'album'];
  trackPointer: number = 0;
  currentMusic: Music = {
    album: "",
    title: "",
    artist: "",
    url:""
  }

  play(): void{
    if (this.audio.paused) {
     if (this.audio.readyState === 0) {
      this.trackPointer = 0;
      this.currentMusic = this.musicList[0];
      this.audio.src = this.currentMusic.url;
     }
     this.audio.play();
    }else {
      this.audio.pause();
    }
  }
  

}
