import { NgModule } from '@angular/core';
import { cardComponent } from './card.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[cardComponent],
    exports: [cardComponent],
    imports: [CommonModule]
})
export class CardModule{}