import { Component, OnInit, Input } from '@angular/core';

import { Link } from '../../models/link';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.scss']
})
export class LinkItemComponent implements OnInit {
  @Input()link: Link; 

  constructor() { }

  ngOnInit(): void {
  }

}
