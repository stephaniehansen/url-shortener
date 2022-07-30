import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Link, ShortenUrlView } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {
  private shortenerUrl = 'https://api.shrtco.de/v2/shorten?url=';
  private links: Link[] = [];

  constructor(private http: HttpClient) { }

  getLinks(): Observable<Link[]> {
    return of(this.links);
  }

  addLink(url: string, onSuccess = () => {}) {
    return this.http.get(this.shortenerUrl + url)
    .subscribe((data: ShortenUrlView) => {
      this.links.unshift({
        shortUrl: `http://${data.result.short_link}`, 
        longUrl: url 
      });
      onSuccess();
    },
    (error) => console.log(error)
    );
  }
}
