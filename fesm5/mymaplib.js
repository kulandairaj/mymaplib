import { Injectable, NgModule, Component, ViewChild, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MymaplibService = /** @class */ (function () {
    function MymaplibService() {
    }
    MymaplibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MymaplibService.ctorParameters = function () { return []; };
    /** @nocollapse */ MymaplibService.ngInjectableDef = defineInjectable({ factory: function MymaplibService_Factory() { return new MymaplibService(); }, token: MymaplibService, providedIn: "root" });
    return MymaplibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MymaplibModule = /** @class */ (function () {
    function MymaplibModule() {
    }
    MymaplibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [MymaplibComponent],
                    exports: [MymaplibComponent]
                },] }
    ];
    return MymaplibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MymaplibService, MymaplibComponent, MymaplibModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXltYXBsaWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL215bWFwbGliL2xpYi9teW1hcGxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9teW1hcGxpYi9saWIvbXltYXBsaWIuY29tcG9uZW50LnRzIiwibmc6Ly9teW1hcGxpYi9saWIvbXltYXBsaWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTXltYXBsaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IE1pY3Jvc29mdDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1tYXAnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGlkPSdteU1hcCcgc3R5bGU9J3dpZHRoOiAxMDB2dzsgaGVpZ2h0OiAxMDB2aDsnPjwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE15bWFwbGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB0aXRsZSA9ICdteU1hcEFwcCc7XG4gICAgYmFzZTY0SW1hZ2UgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCa0FBQUFjQkFNQUFBQm1DZ25qQUFBQUZWQk1WRVZIY0V6Ly8vOGFHaHBzdXkyczRvRFJ1UE1hQURpRWxETUdBQUFBQVhSU1RsTUFRT2JZWmdBQUFGTkpSRUZVZUY3RmtMRU5nREFRQTUyR0dpSXh3RDhiUEJzZ0JtRC9hWENzNkpNTmNwV3RrMXdZeDhTTzZnTzJOM2tXdER1SkJjMzlVdFlUUEVjNjlCSXBUVnFMZ2pKT3BTN3RRMUk1TnlpR2lhMnJIeVQ3T1RnN3hoQm9BQUFBQUVsRlRrU3VRbUNDJztcbiAgICBAVmlld0NoaWxkKCdtYXBFbGVtZW50Jykgc29tZUlucHV0OiBFbGVtZW50UmVmO1xuICAgIG15TWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215TWFwJyk7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1hcFZpZXcoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNYXBWaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgbG9hZE1hcFZpZXcoKSB7XG4gICAgICAgIHZhciBtYXAgPSBuZXcgTWljcm9zb2Z0Lk1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1hcCcpLCB7XG4gICAgICAgICAgICAvKiBObyBuZWVkIHRvIHNldCBjcmVkZW50aWFscyBpZiBhbHJlYWR5IHBhc3NlZCBpbiBVUkwgKi9cbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnQW54cFMtMzJrWXZCempRNXBiWmNuRHoxN29LQmExQnEySFJ3SEFOb05wSHMzWjI1TkR2cWJoY3FKWnlEb1lNaicsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBwdXNocGluID0gbmV3IE1pY3Jvc29mdC5NYXBzLlB1c2hwaW4obWFwLmdldENlbnRlcigpLCB7IGljb246IHRoaXMuYmFzZTY0SW1hZ2UsIGFuY2hvcjogbmV3IE1pY3Jvc29mdC5NYXBzLlBvaW50KDEyLCAyOCkgfSk7XG4gICAgICAgIG1hcC5lbnRpdGllcy5wdXNoKHB1c2hwaW4pO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE15bWFwbGliQ29tcG9uZW50IH0gZnJvbSAnLi9teW1hcGxpYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW015bWFwbGliQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW015bWFwbGliQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNeW1hcGxpYk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MEJBSkQ7Ozs7Ozs7QUNBQTs7cUJBYVUsVUFBVTsyQkFDRixnUkFBZ1I7cUJBRXRSLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDOzs7OztJQUV4QyxvQ0FBUTs7O0lBQVI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ25DLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRztnQkFDMUIsSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtvQkFDcEMsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUN0QjtxQkFBTTtvQkFDSCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ25CO2FBQ0osQ0FBQTtTQUNKO2FBQU07WUFDSCxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEI7U0FDSjtLQUdKOzs7O0lBRUQsdUNBQVc7OztJQUFYOztRQUNJLElBQUksR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTs7WUFFL0QsV0FBVyxFQUFFLGtFQUFrRTtTQUNsRixDQUFDLENBQUM7O1FBRUgsSUFBSSxPQUFPLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hJLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCOztnQkF4Q0osU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUUscUVBRVQ7aUJBRUY7Ozs0QkFLSSxTQUFTLFNBQUMsWUFBWTs7NEJBZjNCOzs7Ozs7O0FDQUE7Ozs7Z0JBR0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDN0I7O3lCQVJEOzs7Ozs7Ozs7Ozs7Ozs7In0=