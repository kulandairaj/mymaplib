import { ElementRef, OnInit } from '@angular/core';
export declare class MymaplibComponent implements OnInit {
    title: string;
    base64Image: string;
    someInput: ElementRef;
    myMap: Element;
    ngOnInit(): void;
    loadMapView(): void;
}
