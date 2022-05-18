import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favourite.directive';
import { CategoryListPipe } from './category-list.pipe'; 
// import {MediaItemFormComponent } from './media-item-form.component';
// import {  FormsModule} from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import {MediaItemService } from './media-item.service';
import { lookupList,lookupListToken } from './providers';
import { HttpClientModule,HttpXhrBackend } from '@angular/common/http';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';
// import { NewItemModule } from './new-item/new-item.module';



@NgModule({
    imports:[
        BrowserModule,
        // FormsModule
        // ReactiveFormsModule,
        HttpClientModule,
        routing,
        // NewItemModule
    ],
    declarations:[
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe,
        // MediaItemFormComponent
    ],
    providers:[
        // MediaItemComponent
        {provide: lookupListToken, useValue: lookupList },
        {provide: HttpXhrBackend, useClass: MockXHRBackend }
    ],
    bootstrap:[
        AppComponent
    ]
})


export class AppModule {
    
}