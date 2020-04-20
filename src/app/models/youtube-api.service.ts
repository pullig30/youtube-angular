import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { Video } from './video.model';
import { SearchResponse } from './search-response.model';


let apiUrl = 'https://www.googleapis.com/youtube/v3/';
let appKey = 'AIzaSyD0EhRd8IjOy4EPqPgflEZQO4UmBiLFL6k';
let maxResults = 10;

@Injectable()
export class YoutubeApiService {

  constructor( private http: HttpClient) {

   }

  getVideos(term: string) {
    let searchUrl = `${apiUrl}search?q=${term}&key=${appKey}&part=snippet&type=video&maxResults=${maxResults}`
    return <Observable<SearchResponse>>this.http.get(searchUrl).pipe(
      map(res => this.extractData<SearchResponse>(res))
    );
  }
  //&relatedToVideoId=5rOiW_xY-kc
  getVideosNextPage(term: string, token: string) {
    let searchUrl = `${apiUrl}search?q=${term}&key=${appKey}&part=snippet&type=video&maxResults=${maxResults}&pageToken=${token}`
    return <Observable<SearchResponse>>this.http.get(searchUrl).pipe(
      map(res => this.extractData<SearchResponse>(res))
    );
  }

  getRelatedVideos(id: string) {
    let searchUrl = `${apiUrl}search?key=${appKey}&part=snippet&type=video&maxResults=${maxResults}&&relatedToVideoId=${id}`
    return <Observable<SearchResponse>>this.http.get(searchUrl).pipe(
      map(res => this.extractData<SearchResponse>(res))
    );
  }

  getVideo(id: string) {
    let searchUrl = `${apiUrl}videos?id=${id}&key=${appKey}&part=snippet`
    return <Observable<Video>>this.http.get(searchUrl).pipe(
      map(res => (this.extractData<SearchResponse>(res).items[0]))
    );
  }

  private extractData<T>(res: any) {
    if (res && (res.status < 200 || res.status >= 300)) {
      throw new Error('Bad response status: ' + res.status);
    }
    return <T>(res || {});
  }
   
}
