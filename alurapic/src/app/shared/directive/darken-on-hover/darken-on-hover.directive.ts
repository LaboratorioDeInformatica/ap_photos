import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective{
    
    @Input() brightness ='70%';
    @Input() initialbrightness ='100%';

    constructor(
        private el: ElementRef,
        private render: Renderer
        ){}

    @HostListener('mouseover')
    darkenOn(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
        console.log('ON');
    }

    @HostListener('mouseleave')
    darkenOf(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.initialbrightness})`);
    
        console.log('OFF');
    }
}