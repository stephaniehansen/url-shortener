import { Component, OnInit } from '@angular/core';

import { ShortenerService } from '../../services/shortener.service';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss']
})
export class ShortenerComponent implements OnInit {
  url: string;
  shortenedUrl;

  constructor(private shortenerService: ShortenerService) { }

  ngOnInit(): void {}

  onSubmit() {
    this.shortenerService.getShortenedLinks(this.url)
    .subscribe(response => this.shortenedUrl = response);
  }
}
