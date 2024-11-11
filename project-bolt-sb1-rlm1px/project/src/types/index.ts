export type Page = 'home' | 'search' | 'library' | 'marketplace' | 'reels' | 'artist' | 'streaming' | 'community' | 'messaging';

export interface Song {
  title: string;
  artist: string;
  image: string;
  duration: string;
  comments: number;
  tokens: number;
}

export interface Artist {
  name: string;
  genre: string;
  image: string;
  followers: number;
}

export interface LocalArtist {
  name: string;
  distance: string;
  image: string;
  genre: string;
  question: string;
}

export interface Book {
  title: string;
  author: string;
  image: string;
  description: string;
}

export interface Video {
  title: string;
  artist: string;
  image: string;
  views: string;
}

export interface Playlist {
  title: string;
  description: string;
  tracks: { image: string }[];
}

export interface Podcast {
  title: string;
  host: string;
  image: string;
  category: string;
}

export type ContentItem = {
  type: 'song' | 'artists' | 'localArtist' | 'book' | 'video' | 'playlist' | 'podcasts';
  [key: string]: any;
};