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

  ngOnInit(): void {
    this.shortenerService.getLinks().subscribe(links => this.links = links)
  }

  onSubmit() {
    this.shortenerService.addLink(this.formattedUrl())
  }

  formattedUrl() {
    return this.url.includes('://') ? this.url : this.url = "http://" + this.url;
  }
}
