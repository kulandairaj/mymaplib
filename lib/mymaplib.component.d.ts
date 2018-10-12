import { ElementRef, OnInit, EventEmitter } from '@angular/core';
export declare class MymaplibComponent implements OnInit {
    ticketList: any;
    ticketClick: EventEmitter<any>;
    title: string;
    base64Image: string;
    someInput: ElementRef;
    myMap: Element;
    ngOnInit(): void;
    loadMapView(): void;
}
