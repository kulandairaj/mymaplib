import { Injectable, Component, ViewChild, Input, Output, EventEmitter, NgModule, defineInjectable } from '@angular/core';

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
        this.ticketList = [];
        this.ticketClick = new EventEmitter();
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
        var _this = this;
        /** @type {?} */
        var that = this;
        /** @type {?} */
        var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
            /* No need to set credentials if already passed in URL */
            center: new Microsoft.Maps.Location(40.3969926, -74.1408029),
            credentials: 'AnxpS-32kYvBzjQ5pbZcnDz17oKBa1Bq2HRwHANoNpHs3Z25NDvqbhcqJZyDoYMj',
            zoom: 12,
            liteMode: true,
            enableClickableLogo: false,
            showLogo: false,
            showTermsLink: false,
            showMapTypeSelector: false,
            showTrafficButton: true,
            enableSearchLogo: false,
            showCopyright: false
        });
        /** @type {?} */
        var infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
            visible: false
        });
        infobox.setMap(map);
        this.ticketList.forEach(function (element) {
            /** @type {?} */
            var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(element.lattitude, element.longititude), { icon: _this.base64Image, text: element.severity });
            pushpin.metadata = element;
            map.entities.push(pushpin);
            Microsoft.Maps.Events.addHandler(pushpin, 'click', function (args) {
                infobox.setOptions({
                    showPointer: true,
                    location: args.target.getLocation(),
                    visible: true,
                    showCloseButton: true,
                    offset: new Microsoft.Maps.Point(0, 20),
                    title: 'Ticket No: ' + args.target.metadata.ticketNo,
                    description: args.target.metadata.description,
                });
                console.log('ticket pin clicked');
                pinClicked(args.target.metadata);
            });
        });
        /**
         * @param {?} parms
         * @return {?}
         */
        function pinClicked(parms) {
            console.log('emit', that);
            that.ticketClick.emit(parms);
        }
    };
    MymaplibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-map',
                    template: "\n  <div id='myMap' style='width: 100vw; height: 100vh;'></div>\n  "
                }] }
    ];
    MymaplibComponent.propDecorators = {
        ticketList: [{ type: Input }],
        ticketClick: [{ type: Output }],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXltYXBsaWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL215bWFwbGliL2xpYi9teW1hcGxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9teW1hcGxpYi9saWIvbXltYXBsaWIuY29tcG9uZW50LnRzIiwibmc6Ly9teW1hcGxpYi9saWIvbXltYXBsaWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTXltYXBsaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgY29uc3QgTWljcm9zb2Z0OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LW1hcCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgaWQ9J215TWFwJyBzdHlsZT0nd2lkdGg6IDEwMHZ3OyBoZWlnaHQ6IDEwMHZoOyc+PC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTXltYXBsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aWNrZXRMaXN0OiBhbnkgPSBbXVxuICBAT3V0cHV0KCkgdGlja2V0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgdGl0bGUgPSAnbXlNYXBBcHAnO1xuICBiYXNlNjRJbWFnZSA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJrQUFBQWNCQU1BQUFCbUNnbmpBQUFBRlZCTVZFVkhjRXovLy84YUdocHN1eTJzNG9EUnVQTWFBRGlFbERNR0FBQUFBWFJTVGxNQVFPYllaZ0FBQUZOSlJFRlVlRjdGa0xFTmdEQVFBNTJHR2lJeHdEOGJQQnNnQm1EL2FYQ3M2Sk1OY3BXdGsxd1l4OFNPNmdPMk4za1d0RHVKQmMzOVV0WVRQRWM2OUJJcFRWcUxnakpPcFM3dFExSTVOeWlHaWEyckh5VDdPVGc3eGhCb0FBQUFBRWxGVGtTdVFtQ0MnO1xuICBAVmlld0NoaWxkKCdtYXBFbGVtZW50Jykgc29tZUlucHV0OiBFbGVtZW50UmVmO1xuICBteU1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteU1hcCcpO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9ICdjb21wbGV0ZScpIHtcbiAgICAgIGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICB0aGlzLmxvYWRNYXBWaWV3KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgIHRoaXMubG9hZE1hcFZpZXcoKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICB9XG5cbiAgbG9hZE1hcFZpZXcoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBtYXAgPSBuZXcgTWljcm9zb2Z0Lk1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1hcCcpLCB7XG4gICAgICAvKiBObyBuZWVkIHRvIHNldCBjcmVkZW50aWFscyBpZiBhbHJlYWR5IHBhc3NlZCBpbiBVUkwgKi9cbiAgICAgIGNlbnRlcjogbmV3IE1pY3Jvc29mdC5NYXBzLkxvY2F0aW9uKDQwLjM5Njk5MjYsIC03NC4xNDA4MDI5KSxcbiAgICAgIGNyZWRlbnRpYWxzOiAnQW54cFMtMzJrWXZCempRNXBiWmNuRHoxN29LQmExQnEySFJ3SEFOb05wSHMzWjI1TkR2cWJoY3FKWnlEb1lNaicsXG4gICAgICB6b29tOiAxMixcbiAgICAgIGxpdGVNb2RlOiB0cnVlLFxuICAgICAgZW5hYmxlQ2xpY2thYmxlTG9nbzogZmFsc2UsXG4gICAgICBzaG93TG9nbzogZmFsc2UsXG4gICAgICBzaG93VGVybXNMaW5rOiBmYWxzZSxcbiAgICAgIHNob3dNYXBUeXBlU2VsZWN0b3I6IGZhbHNlLFxuICAgICAgc2hvd1RyYWZmaWNCdXR0b246IHRydWUsXG4gICAgICBlbmFibGVTZWFyY2hMb2dvOiBmYWxzZSxcbiAgICAgIHNob3dDb3B5cmlnaHQ6IGZhbHNlXG4gICAgfSk7XG4gICAgdmFyIGluZm9ib3ggPSBuZXcgTWljcm9zb2Z0Lk1hcHMuSW5mb2JveChtYXAuZ2V0Q2VudGVyKCksIHtcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfSk7XG4gICAgaW5mb2JveC5zZXRNYXAobWFwKTsgICAgXG5cbiAgICB0aGlzLnRpY2tldExpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHZhciBwdXNocGluID0gbmV3IE1pY3Jvc29mdC5NYXBzLlB1c2hwaW4obmV3IE1pY3Jvc29mdC5NYXBzLkxvY2F0aW9uKGVsZW1lbnQubGF0dGl0dWRlLCBlbGVtZW50LmxvbmdpdGl0dWRlKSwgeyBpY29uOiB0aGlzLmJhc2U2NEltYWdlLCB0ZXh0OiBlbGVtZW50LnNldmVyaXR5IH0pO1xuICAgICAgcHVzaHBpbi5tZXRhZGF0YSA9IGVsZW1lbnQ7XG4gICAgICBtYXAuZW50aXRpZXMucHVzaChwdXNocGluKTtcblxuICAgICAgTWljcm9zb2Z0Lk1hcHMuRXZlbnRzLmFkZEhhbmRsZXIocHVzaHBpbiwgJ2NsaWNrJywgKGFyZ3MpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGluZm9ib3guc2V0T3B0aW9ucyh7XG4gICAgICAgICAgc2hvd1BvaW50ZXI6IHRydWUsXG4gICAgICAgICAgbG9jYXRpb246IGFyZ3MudGFyZ2V0LmdldExvY2F0aW9uKCksXG4gICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXG4gICAgICAgICAgb2Zmc2V0OiBuZXcgTWljcm9zb2Z0Lk1hcHMuUG9pbnQoMCwgMjApLFxuICAgICAgICAgIHRpdGxlOiAnVGlja2V0IE5vOiAnICsgYXJncy50YXJnZXQubWV0YWRhdGEudGlja2V0Tm8sIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBhcmdzLnRhcmdldC5tZXRhZGF0YS5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgLy9odG1sQ29udGVudDogJzxkaXYgY2xhc3MgPSBcImluZnlcIiBzdHlsZT0gXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7IHdpZHRoOjU2MHB4O2hlaWdodDo1MHB4O1wiPjwvZGl2PidcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aWNrZXQgcGluIGNsaWNrZWQnKTtcbiAgICAgICAgcGluQ2xpY2tlZChhcmdzLnRhcmdldC5tZXRhZGF0YSlcbiAgICB9KTtcblxuICB9KTtcbiAgICAvL3ZhciBwdXNocGluID0gbmV3IE1pY3Jvc29mdC5NYXBzLlB1c2hwaW4obWFwLmdldENlbnRlcigpLCB7IGljb246IHRoaXMuYmFzZTY0SW1hZ2UsIHRleHQ6ICdBJywgdGl0bGU6ICdUaXRsZScsIHN1YlRpdGxlOiAnU3VidGl0bGUnIH0pO1xuXG4gICAgLy8gdmFyIHB1c2hwaW4gPSBuZXcgTWljcm9zb2Z0Lk1hcHMuUHVzaHBpbihtYXAuZ2V0Q2VudGVyKCksIHsgaWNvbjogdGhpcy5iYXNlNjRJbWFnZSwgYW5jaG9yOiBuZXcgTWljcm9zb2Z0Lk1hcHMuUG9pbnQoMTIsIDI4KSB9KTtcbiAgICBmdW5jdGlvbiBwaW5DbGlja2VkKHBhcm1zKXtcbiAgICAgIGNvbnNvbGUubG9nKCdlbWl0Jyx0aGF0KTtcbiAgICAgIHRoYXQudGlja2V0Q2xpY2suZW1pdChwYXJtcyk7XG4gICAgfVxuICB9XG5cbiAgXG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNeW1hcGxpYkNvbXBvbmVudCB9IGZyb20gJy4vbXltYXBsaWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNeW1hcGxpYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNeW1hcGxpYkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTXltYXBsaWJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzBCQUpEOzs7Ozs7O0FDQUE7OzBCQVk2QixFQUFFOzJCQUNjLElBQUksWUFBWSxFQUFPO3FCQUUxRCxVQUFVOzJCQUNKLGdSQUFnUjtxQkFFdFIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Ozs7O0lBRXhDLG9DQUFROzs7SUFBUjtRQUFBLGlCQWdCQztRQWZDLElBQUksUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQUU7WUFDckMsUUFBUSxDQUFDLGtCQUFrQixHQUFHO2dCQUM1QixJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO29CQUN0QyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDakI7YUFDRixDQUFBO1NBQ0Y7YUFBTTtZQUNMLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQjtTQUNGO0tBR0Y7Ozs7SUFFRCx1Q0FBVzs7O0lB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