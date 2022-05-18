import { Component,OnInit } from '@angular/core';
import { MediaItemService,MediaItem } from './media-item.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})

export class MediaItemListComponent implements OnInit {

  medium='';
  constructor(private mediaItemService: MediaItemService, private activatedRoute: ActivatedRoute){

  }
  mediaItems:MediaItem[] ;
  ngOnInit() {
   this.activatedRoute.paramMap.subscribe(p =>{
    let medium=p.get('medium');
    if(medium.toLowerCase()==='all'){
      medium='';
    }
    this.getMediaItems(medium);
   });
   
  }
 
  getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }

  onMediaItemDelete(mediaItem) { 
      console.log("Data from parent to child",mediaItem);
      this.mediaItemService.delete(mediaItem).subscribe(()=>{
        this.getMediaItems(this.medium);
      });
  }

  
}