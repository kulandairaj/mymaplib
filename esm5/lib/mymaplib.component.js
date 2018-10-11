/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
var MymaplibComponent = /** @class */ (function () {
    function MymaplibComponent() {
        this.title = 'myMapApp';
        this.base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcBAMAAABmCgnjAAAAFVBMVEVHcEz///8aGhpsuy2s4oDRuPMaADiElDMGAAAAAXRSTlMAQObYZgAAAFNJREFUeF7FkLENgDAQA52GGiIxwD8bPBsgBmD/aXCs6JMNcpWtk1wYx8SO6gO2N3kWtDuJBc39UtYTPEc69BIpTVqLgjJOpS7tQ1I5NyiGia2rHyT7OTg7xhBoAAAAAElFTkSuQmCC';
        this.myMap = document.querySelector('#myMap');
    }
    /**
     * @return {?}
     */
    MymaplibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (document.readyState != 'complete') {
            document.onreadystatechange = function () {
                if (document.readyState === 'complete') {
                    _this.loadMapView();
                }
                else {
                    _this.ngOnInit();
                }
            };
        }
        else {
            if (document.readyState === 'complete') {
                this.loadMapView();
            }
        }
    };
    /**
     * @return {?}
     */
    MymaplibComponent.prototype.loadMapView = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
            /* No need to set credentials if already passed in URL */
            credentials: 'AnxpS-32kYvBzjQ5pbZcnDz17oKBa1Bq2HRwHANoNpHs3Z25NDvqbhcqJZyDoYMj',
        });
        /** @type {?} */
        var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: this.base64Image, anchor: new Microsoft.Maps.Point(12, 28) });
        map.entities.push(pushpin);
    };
    MymaplibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-map',
                    template: "\n  <div id='myMap' style='width: 100vw; height: 100vh;'></div>\n  "
                }] }
    ];
    MymaplibComponent.propDecorators = {
        someInput: [{ type: ViewChild, args: ['mapElement',] }]
    };
    return MymaplibComponent;
}());
export { MymaplibComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXltYXBsaWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXltYXBsaWIvIiwic291cmNlcyI6WyJsaWIvbXltYXBsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7cUJBYWpGLFVBQVU7MkJBQ0YsZ1JBQWdSO3FCQUV0UixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzs7Ozs7SUFFeEMsb0NBQVE7OztJQUFSO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUNuQyxRQUFRLENBQUMsa0JBQWtCLEdBQUc7Z0JBQzFCLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7b0JBQ3BDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDdEI7cUJBQU07b0JBQ0gsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNuQjthQUNKLENBQUE7U0FDSjthQUFNO1lBQ0gsSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3RCO1NBQ0o7S0FHSjs7OztJQUVELHVDQUFXOzs7SUFBWDs7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7O1lBRS9ELFdBQVcsRUFBRSxrRUFBa0U7U0FDbEYsQ0FBQyxDQUFDOztRQUVILElBQUksT0FBTyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM5Qjs7Z0JBeENKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLHFFQUVUO2lCQUVGOzs7NEJBS0ksU0FBUyxTQUFDLFlBQVk7OzRCQWYzQjs7U0FXYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgY29uc3QgTWljcm9zb2Z0OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LW1hcCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgaWQ9J215TWFwJyBzdHlsZT0nd2lkdGg6IDEwMHZ3OyBoZWlnaHQ6IDEwMHZoOyc+PC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTXltYXBsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHRpdGxlID0gJ215TWFwQXBwJztcbiAgICBiYXNlNjRJbWFnZSA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJrQUFBQWNCQU1BQUFCbUNnbmpBQUFBRlZCTVZFVkhjRXovLy84YUdocHN1eTJzNG9EUnVQTWFBRGlFbERNR0FBQUFBWFJTVGxNQVFPYllaZ0FBQUZOSlJFRlVlRjdGa0xFTmdEQVFBNTJHR2lJeHdEOGJQQnNnQm1EL2FYQ3M2Sk1OY3BXdGsxd1l4OFNPNmdPMk4za1d0RHVKQmMzOVV0WVRQRWM2OUJJcFRWcUxnakpPcFM3dFExSTVOeWlHaWEyckh5VDdPVGc3eGhCb0FBQUFBRWxGVGtTdVFtQ0MnO1xuICAgIEBWaWV3Q2hpbGQoJ21hcEVsZW1lbnQnKSBzb21lSW5wdXQ6IEVsZW1lbnRSZWY7XG4gICAgbXlNYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlNYXAnKTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTWFwVmlldygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZE1hcFZpZXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBsb2FkTWFwVmlldygpIHtcbiAgICAgICAgdmFyIG1hcCA9IG5ldyBNaWNyb3NvZnQuTWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TWFwJyksIHtcbiAgICAgICAgICAgIC8qIE5vIG5lZWQgdG8gc2V0IGNyZWRlbnRpYWxzIGlmIGFscmVhZHkgcGFzc2VkIGluIFVSTCAqL1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdBbnhwUy0zMmtZdkJ6alE1cGJaY25EejE3b0tCYTFCcTJIUndIQU5vTnBIczNaMjVORHZxYmhjcUpaeURvWU1qJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHB1c2hwaW4gPSBuZXcgTWljcm9zb2Z0Lk1hcHMuUHVzaHBpbihtYXAuZ2V0Q2VudGVyKCksIHsgaWNvbjogdGhpcy5iYXNlNjRJbWFnZSwgYW5jaG9yOiBuZXcgTWljcm9zb2Z0Lk1hcHMuUG9pbnQoMTIsIDI4KSB9KTtcbiAgICAgICAgbWFwLmVudGl0aWVzLnB1c2gocHVzaHBpbik7XG4gICAgfVxuXG59XG4iXX0=