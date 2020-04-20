import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../models'

@Component({
    selector: 'video-list-item',
    templateUrl: './video-list-item.component.html',
    styleUrls: ['./video-list.component.css']
})



export class VideoListItemComponent {
  @Input() video: Video;
  
  constructor(
  ) {}

}