import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShortenerService {
  private shortenerUrl = 'https://rel.ink/api/links/';

  constructor(private http: HttpClient) { }

  getShortenedLink(url: string) {
    return this.http.post(this.shortenerUrl, {"url": url})
  }
}
