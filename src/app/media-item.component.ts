import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
    // name = 'The Redemption';
    // wasWatched(){
    //     return true;
    // }
    @Input() mediaItem;
    @Output() delete = new EventEmitter(); //creating object 

    
    onDelete(){
      //  console.log('function has been called');
      this.delete.emit(this.mediaItem);
    }
}
