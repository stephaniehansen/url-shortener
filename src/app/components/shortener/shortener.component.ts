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

  onSubmit() {
    this.shortenerService.getShortenedLink(this.url)
    .subscribe(response => {
      this.links.push({
        hash: response[Object.keys(response)[0]], 
        longUrl: this.url})
    });
  }
}
