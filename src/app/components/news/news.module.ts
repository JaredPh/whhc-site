import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../utils/utils.module';

import { NewsService } from './news.service';
import { HomeBasicNewsCardComponent } from './news-basic-card/news-basic-card.component';
import { HomeFeaturedNewsCardComponent } from './news-featured-card/news-featured-card.component';

@NgModule({
  declarations: [
    HomeBasicNewsCardComponent,
    HomeFeaturedNewsCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule,
  ],
  providers: [
    NewsService,
  ],
  exports: [
    HomeBasicNewsCardComponent,
    HomeFeaturedNewsCardComponent,
  ],
})
export class NewsModule { }

