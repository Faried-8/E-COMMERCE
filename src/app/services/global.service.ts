import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const MOCK_POSTS = [
  { id: 1, userId: 1, title: 'Introduction to Angular', body: 'Angular is a platform for building mobile and desktop web applications.' },
  { id: 2, userId: 1, title: 'Getting Started with RxJS', body: 'RxJS is a library for reactive programming using Observables.' },
  { id: 3, userId: 1, title: 'Angular Services', body: 'Services provide a way to share data and logic across components.' },
  { id: 4, userId: 1, title: 'Angular Routing', body: 'The Angular Router enables navigation from one view to the next.' },
  { id: 5, userId: 1, title: 'Angular Forms', body: 'Angular provides two approaches to handling user input through forms.' },
];

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  [x: string]: any;

  isLogin: boolean = false;
  posts: any;
  userName = localStorage.getItem('user_name') ?? '';
  is_login = localStorage.getItem('userToken') ? true : false;

  constructor() {}

  getPosts(): Observable<any> {
    return of(MOCK_POSTS);
  }

  getSinglePost(id: any): Observable<any> {
    const post = MOCK_POSTS.find(p => p.id == id) || MOCK_POSTS[0];
    return of(post);
  }
}
