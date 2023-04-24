import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[apphighligher]'
})
export class ElementHighlighter {

    constructor(private elem: ElementRef) {
        // console.log(this.elem.nativeElement)
        this.elem.nativeElement.style.backgroundColor = "#ccc"
        this.elem.nativeElement.style.color = "#000"
    }
}