/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
export class MymaplibComponent {
    constructor() {
        this.title = 'myMapApp';
        this.base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcBAMAAABmCgnjAAAAFVBMVEVHcEz///8aGhpsuy2s4oDRuPMaADiElDMGAAAAAXRSTlMAQObYZgAAAFNJREFUeF7FkLENgDAQA52GGiIxwD8bPBsgBmD/aXCs6JMNcpWtk1wYx8SO6gO2N3kWtDuJBc39UtYTPEc69BIpTVqLgjJOpS7tQ1I5NyiGia2rHyT7OTg7xhBoAAAAAElFTkSuQmCC';
        this.myMap = document.querySelector('#myMap');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (document.readyState != 'complete') {
            document.onreadystatechange = () => {
                if (document.readyState === 'complete') {
                    this.loadMapView();
                }
                else {
                    this.ngOnInit();
                }
            };
        }
        else {
            if (document.readyState === 'complete') {
                this.loadMapView();
            }
        }
    }
    /**
     * @return {?}
     */
    loadMapView() {
        /** @type {?} */
        var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
            /* No need to set credentials if already passed in URL */
            credentials: 'AnxpS-32kYvBzjQ5pbZcnDz17oKBa1Bq2HRwHANoNpHs3Z25NDvqbhcqJZyDoYMj',
        });
        /** @type {?} */
        var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: this.base64Image, anchor: new Microsoft.Maps.Point(12, 28) });
        map.entities.push(pushpin);
    }
}
MymaplibComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-map',
                template: `
  <div id='myMap' style='width: 100vw; height: 100vh;'></div>
  `
            }] }
];
MymaplibComponent.propDecorators = {
    someInput: [{ type: ViewChild, args: ['mapElement',] }]
};
if (false) {
    /** @type {?} */
    MymaplibComponent.prototype.title;
    /** @type {?} */
    MymaplibComponent.prototype.base64Image;
    /** @type {?} */
    MymaplibComponent.prototype.someInput;
    /** @type {?} */
    MymaplibComponent.prototype.myMap;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXltYXBsaWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXltYXBsaWIvIiwic291cmNlcyI6WyJsaWIvbXltYXBsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVzNGLE1BQU07O3FCQUVJLFVBQVU7MkJBQ0YsZ1JBQWdSO3FCQUV0UixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzs7Ozs7SUFFeEMsUUFBUTtRQUNKLElBQUksUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7WUFDbkMsUUFBUSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtnQkFDL0IsSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUN0QjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ25CO2FBQ0osQ0FBQTtTQUNKO2FBQU07WUFDSCxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEI7U0FDSjtLQUdKOzs7O0lBRUQsV0FBVzs7UUFDUCxJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7O1lBRS9ELFdBQVcsRUFBRSxrRUFBa0U7U0FDbEYsQ0FBQyxDQUFDOztRQUVILElBQUksT0FBTyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM5Qjs7O1lBeENKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFOztHQUVUO2FBRUY7Ozt3QkFLSSxTQUFTLFNBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZGVjbGFyZSBjb25zdCBNaWNyb3NvZnQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktbWFwJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBpZD0nbXlNYXAnIHN0eWxlPSd3aWR0aDogMTAwdnc7IGhlaWdodDogMTAwdmg7Jz48L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNeW1hcGxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGl0bGUgPSAnbXlNYXBBcHAnO1xuICAgIGJhc2U2NEltYWdlID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmtBQUFBY0JBTUFBQUJtQ2duakFBQUFGVkJNVkVWSGNFei8vLzhhR2hwc3V5MnM0b0RSdVBNYUFEaUVsRE1HQUFBQUFYUlNUbE1BUU9iWVpnQUFBRk5KUkVGVWVGN0ZrTEVOZ0RBUUE1MkdHaUl4d0Q4YlBCc2dCbUQvYVhDczZKTU5jcFd0azF3WXg4U082Z08yTjNrV3REdUpCYzM5VXRZVFBFYzY5QklwVFZxTGdqSk9wUzd0UTFJNU55aUdpYTJySHlUN09UZzd4aEJvQUFBQUFFbEZUa1N1UW1DQyc7XG4gICAgQFZpZXdDaGlsZCgnbWFwRWxlbWVudCcpIHNvbWVJbnB1dDogRWxlbWVudFJlZjtcbiAgICBteU1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteU1hcCcpO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRNYXBWaWV3KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTWFwVmlldygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGxvYWRNYXBWaWV3KCkge1xuICAgICAgICB2YXIgbWFwID0gbmV3IE1pY3Jvc29mdC5NYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNYXAnKSwge1xuICAgICAgICAgICAgLyogTm8gbmVlZCB0byBzZXQgY3JlZGVudGlhbHMgaWYgYWxyZWFkeSBwYXNzZWQgaW4gVVJMICovXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ0FueHBTLTMya1l2QnpqUTVwYlpjbkR6MTdvS0JhMUJxMkhSd0hBTm9OcEhzM1oyNU5EdnFiaGNxSlp5RG9ZTWonLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgcHVzaHBpbiA9IG5ldyBNaWNyb3NvZnQuTWFwcy5QdXNocGluKG1hcC5nZXRDZW50ZXIoKSwgeyBpY29uOiB0aGlzLmJhc2U2NEltYWdlLCBhbmNob3I6IG5ldyBNaWNyb3NvZnQuTWFwcy5Qb2ludCgxMiwgMjgpIH0pO1xuICAgICAgICBtYXAuZW50aXRpZXMucHVzaChwdXNocGluKTtcbiAgICB9XG5cbn1cbiJdfQ==