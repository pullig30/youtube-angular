import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { SearchResultComponent } from './search/search-result.component';

const routes: Routes = [

    { path: '', redirectTo: 'videos', pathMatch: 'full' },
    { path: 'videos', component: SearchResultComponent },
    { path: 'video/:id' , component: VideoDetailsComponent}
    
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }