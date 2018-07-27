import { Component, Input } from '@angular/core';
import { PageSummary } from '../../../components/shared/models/pages.models';

@Component({
  selector: 'whhc-page-list-card',
  templateUrl: './page-list-card.component.html',
})
export class PageListCardComponent {

  @Input() page: PageSummary;

}
