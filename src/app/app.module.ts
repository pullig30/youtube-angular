import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { YoutubeApiService } from './models';
import { SearchComponent } from './search/search.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListItemComponent } from './video-list/video-list-item.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { ResultsService } from './shared/results.service';
import { AppRoutingModule } from './app.route.module';
import { SearchResultComponent } from './search/search-result.component';
import { SafePipe } from './shared/safe.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    VideoListComponent,
    VideoListItemComponent,
    VideoDetailsComponent,
    SearchResultComponent,
    SafePipe
  ],

  providers: [
    YoutubeApiService,
    ResultsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
