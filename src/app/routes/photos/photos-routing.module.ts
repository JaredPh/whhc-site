import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos.component';

const routes: Routes = [
  { path: '', component: PhotosComponent },
  // { path: 'tags/:tag', component: NewsComponent, data: { reuse: false }},
  { path: 'tags', redirectTo: '' },
  // { path: ':slug', component: NewsArticleComponent, data: { reuse: false }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
