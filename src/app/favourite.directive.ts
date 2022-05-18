import {Directive,HostBinding,Input,HostListener} from '@angular/core';


@Directive({
    selector:'[mwFavorite]'
})
export class FavoriteDirective{
    @HostBinding('class.is-favorite') isFavorite=true;
    @Input() set mwFavorite(value) {
        this.isFavorite=value;
    }
    @HostBinding('class.is-favorite-hovering') hovering=false;
    @HostListener('mouseenter') onMouseEnter(){
        this.hovering=true;
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.hovering=false;
    }
}