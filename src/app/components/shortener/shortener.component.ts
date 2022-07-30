import { Component, OnDestroy, OnInit } from '@angular/core';

import { ShortenerService } from '../../services/shortener.service';
import { Link } from '../../models';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UtilsHelper } from '../../utils/UtilsHelper';
import { URL_REGEX } from '../../utils/Regex';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss']
})
export class ShortenerComponent implements OnInit, OnDestroy {
  url: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.pattern(URL_REGEX)
  ]);
  links: Link[] = [];

  private subscriptionNotifier = new Subject();

  constructor(private shortenerService: ShortenerService) { }

  ngOnInit(): void {
    this.shortenerService.getLinks()
    .pipe(takeUntil(this.subscriptionNotifier))
    .subscribe(links => this.links = links);
  }

  ngOnDestroy(): void {
    this.subscriptionNotifier.next();
    this.subscriptionNotifier.complete();
  }

  onSubmit() {
    if (this.url.valid) {
      this.shortenerService.addLink(UtilsHelper.formatUrl(this.url.value),
        // on success
        () => {
          this.url.setValue('');
          this.url.markAsUntouched();
        }
      );
      ;
    }
  }

}
