import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ShortenerService {
  private shortenerUrl = 'https://rel.ink/api/links/';

  constructor(private http: HttpClient) { }

  getShortenedLinks(url: string) {
    return this.http.post(this.shortenerUrl, {"url": url})
  }
}
