import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IAppState } from '../../app.store';
import { News } from '../../components/news/news.models';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { SEOService } from '../../components/shared/services/seo.service';

@Component({
  selector: 'whhc-photos',
  templateUrl: './photos.component.html',
})
export class PhotosComponent implements OnInit {

  @select(s => s.tags) tags: Observable<string[]>;

  public articles: News[];
  public selectedTag: string;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private pageLoader: PageLoaderService,
    private seoService: SEOService,
  ) {
    this.seoService.setTags({
      title: 'Photos',
      description: 'The latest photos of West Hampstead members on and off the pitch.',
    });
  }

  ngOnInit() {
    this.pageLoader.clear();

    this.route.params.subscribe( params => {
      this.selectedTag = params.tag;

      this.ngRedux
        .select(s => s.news)
        .subscribe((articles) => {
          this.articles = (this.selectedTag)
            ? articles.filter(a => a.tags.indexOf(this.selectedTag) >= 0 && a.photos.length > 0)
            : articles.filter(a => a.photos.length > 0);
        });
    });
  }
}
