import { Component, OnInit } from '@angular/core';
import { STATISTICS_BENEFITS } from './StatisticsBenefits';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  statisticsBenefits = STATISTICS_BENEFITS;

  constructor() { }

  ngOnInit(): void {
  }

}
