import {Directive, ElementRef, Renderer} from 'angular2/core';
//ElementRef gives us access to host element
//Renderer service used to modify that element

@Directive({
    selector: '[autoGrow]', 
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

//"el" is an arbitrary name
export class AutoGrowDirective{
    constructor(private el: ElementRef, private renderer: Renderer) { //dependency injection: ng will automatically inject instances of elementREf and renderer into this class
        
    }

    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }

    onBlur(){ //'when input goes out of focus, set width to 120'
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');  

    }
}