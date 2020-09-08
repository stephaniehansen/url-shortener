import { Component, OnInit, Input } from '@angular/core';

import { Link } from '../../models/link';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.scss']
})
export class LinkItemComponent implements OnInit {
  @Input()link: Link;
  isCopied: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  linkCopied() {
    this.isCopied = true;
    setTimeout(() => { this.isCopied = !this.isCopied; }, 1000)
  }
}
