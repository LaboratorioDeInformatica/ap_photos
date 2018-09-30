import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotosComponent } from './photos/photos.component';
import { CardModule } from '../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkeOnHoverModule } from '../../shared/directive/darken-on-hover/darken-on-hover.module';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations:[
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    
    ],
    imports:[ CommonModule,
              PhotoModule,
              CardModule,
              DarkeOnHoverModule,
              RouterModule
            ]
})
export class PhotoListModule{

}