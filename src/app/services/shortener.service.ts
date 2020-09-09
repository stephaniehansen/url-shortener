import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Link } from '../models/link';

@Injectable({
  providedIn: 'root'
})

export class ShortenerService {
  private shortenerUrl = 'https://rel.ink/api/links/';
  private links: Link[] = [];

  constructor(private http: HttpClient) { }

  getLinks(): Observable<Link[]> {
    return of (this.links);
  }

  addLink(url: string) {
    return this.http.post(this.shortenerUrl, {"url": url})
    .subscribe(response => {
      this.links.unshift({
        shortUrl: "https://rel.ink/" + response[Object.keys(response)[0]], 
        longUrl: url})
    });
  }
}
