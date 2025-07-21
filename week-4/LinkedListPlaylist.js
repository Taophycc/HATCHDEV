"use strict";
///////////////////// Music playlist ////////////////
/*
class Song {
    constructor(title, artist, duration) {
        this.next = null;
        this.title = title;
        this.artist = artist;
        this.duration = duration;
    }
}
class Playlist {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addSong(title, artist, duration) {
        const newSong = new Song(title, artist, duration);
        if (!this.head) {
            this.head = this.tail = newSong;
        }
        else if (this.tail) {
            this.tail.next = newSong;
            this.tail = newSong;
        }
    }
    removeSong(title) {
        let current = this.head;
        let prev = null;
        while (current) {
            if (current.title === title) {
                if (current === this.head) {
                    this.head = current.next;
                    if (current === this.tail) {
                        this.tail = null;
                    }
                }
                else if (current === this.tail) {
                    this.tail = prev;
                    if (this.tail)
                        this.tail.next = null;
                }
                else if (prev) {
                    prev.next = current.next;
                }
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }
    shufflePlaylist() {
        const songsArray = [];
        let current = this.head;
        while (current) {
            songsArray.push(current);
            current = current.next;
        }
        for (let i = songsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [songsArray[i], songsArray[j]] = [songsArray[j], songsArray[i]];
        }
        this.head = songsArray[0] || null;
        this.tail = songsArray[songsArray.length - 1] || null;
        for (let i = 0; i < songsArray.length - 1; i++) {
            songsArray[i].next = songsArray[i + 1];
        }
        if (this.tail)
            this.tail.next = null;
    }
}
const playlist = new Playlist();
playlist.addSong("Song A", "Artist 1", 555);
playlist.addSong("Song B", "Artist 2", 802);
playlist.addSong("Song C", "Artist 3", 630);
console.log(playlist);
playlist.removeSong("Song B");
console.log(playlist);
playlist.shufflePlaylist();
console.log(playlist);
*/
/*
///////////////////// Music playlist ////////////////
class Song {
  title: string;
  artist: string;
  duration: number;
  next: Song | null = null;

  constructor(title: string, artist: string, duration: number) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }
}

class Playlist {
  private head: Song | null = null;
  private tail: Song | null = null;

  addSong(title: string, artist: string, duration: number): void {
    const newSong = new Song(title, artist, duration);

    if (!this.head) {
      this.head = this.tail = newSong;
    } else if (this.tail) {
      this.tail.next = newSong;
      this.tail = newSong;
    }
  }

  removeSong(title: string): boolean {
    let current: Song | null = this.head;
    let prev: Song | null = null;

    while (current) {
      if (current.title === title) {
        if (current === this.head) {
          this.head = current.next;
          if (current === this.tail) {
            this.tail = null;
          }
        } else if (current === this.tail) {
          this.tail = prev;
          if (this.tail) this.tail.next = null;
        } else if (prev) {
          prev.next = current.next;
        }
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false;
  }

  shufflePlaylist(): void {
    const songsArray: Song[] = [];
    let current = this.head;

    while (current) {
      songsArray.push(current);
      current = current.next;
    }

    for (let i = songsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songsArray[i], songsArray[j]] = [songsArray[j], songsArray[i]];
    }

    this.head = songsArray[0] || null;
    this.tail = songsArray[songsArray.length - 1] || null;

    for (let i = 0; i < songsArray.length - 1; i++) {
      songsArray[i].next = songsArray[i + 1];
    }
    if (this.tail) this.tail.next = null;
  }
}

const playlist = new Playlist();
playlist.addSong("Song A", "Artist 1", 555);
playlist.addSong("Song B", "Artist 2", 802);
playlist.addSong("Song C", "Artist 3", 630);
console.log(playlist);

playlist.removeSong("Song B");
console.log(playlist);

playlist.shufflePlaylist();
console.log(playlist);

*/ 
