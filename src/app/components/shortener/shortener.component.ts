import { Component, OnInit } from '@angular/core';

import { ShortenerService } from '../../services/shortener.service';
import { Link } from '../../models/link';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss']
})
export class ShortenerComponent implements OnInit {
  url: string;
  links: Link[] = [];

  constructor(private shortenerService: ShortenerService) { }

  ngOnInit(): void {}

  formattedUrl() {
    return this.url.includes('://') ? this.url : this.url = "http://" + this.url;
  }

  onSubmit() {
    this.shortenerService.getShortenedLink(this.formattedUrl())
    .subscribe(response => {
      this.links.unshift({
        shortUrl: "https://rel.ink/" + response[Object.keys(response)[0]], 
        longUrl: this.url})
    });
  }
}
