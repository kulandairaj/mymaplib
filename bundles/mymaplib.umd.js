(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('mymaplib', ['exports', '@angular/core'], factory) :
    (factory((global.mymaplib = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MymaplibService = /** @class */ (function () {
        function MymaplibService() {
        }
        MymaplibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MymaplibService.ctorParameters = function () { return []; };
        /** @nocollapse */ MymaplibService.ngInjectableDef = i0.defineInjectable({ factory: function MymaplibService_Factory() { return new MymaplibService(); }, token: MymaplibService, providedIn: "root" });
        return MymaplibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MymaplibComponent = /** @class */ (function () {
        function MymaplibComponent() {
            this.ticketList = [];
            this.ticketClick = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'my-map',
                        template: "\n  <div id='myMap' style='width: 100vw; height: 100vh;'></div>\n  "
                    }] }
        ];
        MymaplibComponent.propDecorators = {
            ticketList: [{ type: i0.Input }],
            ticketClick: [{ type: i0.Output }],
            someInput: [{ type: i0.ViewChild, args: ['mapElement',] }]
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
            { type: i0.NgModule, args: [{
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

    exports.MymaplibService = MymaplibService;
    exports.MymaplibComponent = MymaplibComponent;
    exports.MymaplibModule = MymaplibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXltYXBsaWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teW1hcGxpYi9saWIvbXltYXBsaWIuc2VydmljZS50cyIsIm5nOi8vbXltYXBsaWIvbGliL215bWFwbGliLmNvbXBvbmVudC50cyIsIm5nOi8vbXltYXBsaWIvbGliL215bWFwbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE15bWFwbGliU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IE1pY3Jvc29mdDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1tYXAnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGlkPSdteU1hcCcgc3R5bGU9J3dpZHRoOiAxMDB2dzsgaGVpZ2h0OiAxMDB2aDsnPjwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE15bWFwbGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGlja2V0TGlzdDogYW55ID0gW11cbiAgQE91dHB1dCgpIHRpY2tldENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHRpdGxlID0gJ215TWFwQXBwJztcbiAgYmFzZTY0SW1hZ2UgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCa0FBQUFjQkFNQUFBQm1DZ25qQUFBQUZWQk1WRVZIY0V6Ly8vOGFHaHBzdXkyczRvRFJ1UE1hQURpRWxETUdBQUFBQVhSU1RsTUFRT2JZWmdBQUFGTkpSRUZVZUY3RmtMRU5nREFRQTUyR0dpSXh3RDhiUEJzZ0JtRC9hWENzNkpNTmNwV3RrMXdZeDhTTzZnTzJOM2tXdER1SkJjMzlVdFlUUEVjNjlCSXBUVnFMZ2pKT3BTN3RRMUk1TnlpR2lhMnJIeVQ3T1RnN3hoQm9BQUFBQUVsRlRrU3VRbUNDJztcbiAgQFZpZXdDaGlsZCgnbWFwRWxlbWVudCcpIHNvbWVJbnB1dDogRWxlbWVudFJlZjtcbiAgbXlNYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlNYXAnKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSAnY29tcGxldGUnKSB7XG4gICAgICBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgdGhpcy5sb2FkTWFwVmlldygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB0aGlzLmxvYWRNYXBWaWV3KCk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgfVxuXG4gIGxvYWRNYXBWaWV3KCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgbWFwID0gbmV3IE1pY3Jvc29mdC5NYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNYXAnKSwge1xuICAgICAgLyogTm8gbmVlZCB0byBzZXQgY3JlZGVudGlhbHMgaWYgYWxyZWFkeSBwYXNzZWQgaW4gVVJMICovXG4gICAgICBjZW50ZXI6IG5ldyBNaWNyb3NvZnQuTWFwcy5Mb2NhdGlvbig0MC4zOTY5OTI2LCAtNzQuMTQwODAyOSksXG4gICAgICBjcmVkZW50aWFsczogJ0FueHBTLTMya1l2QnpqUTVwYlpjbkR6MTdvS0JhMUJxMkhSd0hBTm9OcEhzM1oyNU5EdnFiaGNxSlp5RG9ZTWonLFxuICAgICAgem9vbTogMTIsXG4gICAgICBsaXRlTW9kZTogdHJ1ZSxcbiAgICAgIGVuYWJsZUNsaWNrYWJsZUxvZ286IGZhbHNlLFxuICAgICAgc2hvd0xvZ286IGZhbHNlLFxuICAgICAgc2hvd1Rlcm1zTGluazogZmFsc2UsXG4gICAgICBzaG93TWFwVHlwZVNlbGVjdG9yOiBmYWxzZSxcbiAgICAgIHNob3dUcmFmZmljQnV0dG9uOiB0cnVlLFxuICAgICAgZW5hYmxlU2VhcmNoTG9nbzogZmFsc2UsXG4gICAgICBzaG93Q29weXJpZ2h0OiBmYWxzZVxuICAgIH0pO1xuICAgIHZhciBpbmZvYm94ID0gbmV3IE1pY3Jvc29mdC5NYXBzLkluZm9ib3gobWFwLmdldENlbnRlcigpLCB7XG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIGluZm9ib3guc2V0TWFwKG1hcCk7ICAgIFxuXG4gICAgdGhpcy50aWNrZXRMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICB2YXIgcHVzaHBpbiA9IG5ldyBNaWNyb3NvZnQuTWFwcy5QdXNocGluKG5ldyBNaWNyb3NvZnQuTWFwcy5Mb2NhdGlvbihlbGVtZW50LmxhdHRpdHVkZSwgZWxlbWVudC5sb25naXRpdHVkZSksIHsgaWNvbjogdGhpcy5iYXNlNjRJbWFnZSwgdGV4dDogZWxlbWVudC5zZXZlcml0eSB9KTtcbiAgICAgIHB1c2hwaW4ubWV0YWRhdGEgPSBlbGVtZW50O1xuICAgICAgbWFwLmVudGl0aWVzLnB1c2gocHVzaHBpbik7XG5cbiAgICAgIE1pY3Jvc29mdC5NYXBzLkV2ZW50cy5hZGRIYW5kbGVyKHB1c2hwaW4sICdjbGljaycsIChhcmdzKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBpbmZvYm94LnNldE9wdGlvbnMoe1xuICAgICAgICAgIHNob3dQb2ludGVyOiB0cnVlLFxuICAgICAgICAgIGxvY2F0aW9uOiBhcmdzLnRhcmdldC5nZXRMb2NhdGlvbigpLFxuICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuICAgICAgICAgIG9mZnNldDogbmV3IE1pY3Jvc29mdC5NYXBzLlBvaW50KDAsIDIwKSxcbiAgICAgICAgICB0aXRsZTogJ1RpY2tldCBObzogJyArIGFyZ3MudGFyZ2V0Lm1ldGFkYXRhLnRpY2tldE5vLCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjogYXJncy50YXJnZXQubWV0YWRhdGEuZGVzY3JpcHRpb24sIFxuICAgICAgICAgIC8vaHRtbENvbnRlbnQ6ICc8ZGl2IGNsYXNzID0gXCJpbmZ5XCIgc3R5bGU9IFwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7Ym9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5OyB3aWR0aDo1NjBweDtoZWlnaHQ6NTBweDtcIj48L2Rpdj4nXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygndGlja2V0IHBpbiBjbGlja2VkJyk7XG4gICAgICAgIHBpbkNsaWNrZWQoYXJncy50YXJnZXQubWV0YWRhdGEpXG4gICAgfSk7XG5cbiAgfSk7XG4gICAgLy92YXIgcHVzaHBpbiA9IG5ldyBNaWNyb3NvZnQuTWFwcy5QdXNocGluKG1hcC5nZXRDZW50ZXIoKSwgeyBpY29uOiB0aGlzLmJhc2U2NEltYWdlLCB0ZXh0OiAnQScsIHRpdGxlOiAnVGl0bGUnLCBzdWJUaXRsZTogJ1N1YnRpdGxlJyB9KTtcblxuICAgIC8vIHZhciBwdXNocGluID0gbmV3IE1pY3Jvc29mdC5NYXBzLlB1c2hwaW4obWFwLmdldENlbnRlcigpLCB7IGljb246IHRoaXMuYmFzZTY0SW1hZ2UsIGFuY2hvcjogbmV3IE1pY3Jvc29mdC5NYXBzLlBvaW50KDEyLCAyOCkgfSk7XG4gICAgZnVuY3Rpb24gcGluQ2xpY2tlZChwYXJtcyl7XG4gICAgICBjb25zb2xlLmxvZygnZW1pdCcsdGhhdCk7XG4gICAgICB0aGF0LnRpY2tldENsaWNrLmVtaXQocGFybXMpO1xuICAgIH1cbiAgfVxuXG4gIFxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTXltYXBsaWJDb21wb25lbnQgfSBmcm9tICcuL215bWFwbGliLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTXltYXBsaWJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTXltYXBsaWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE15bWFwbGliTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJJbnB1dCIsIk91dHB1dCIsIlZpZXdDaGlsZCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs4QkFKRDs7Ozs7OztBQ0FBOzs4QkFZNkIsRUFBRTsrQkFDYyxJQUFJQyxlQUFZLEVBQU87eUJBRTFELFVBQVU7K0JBQ0osZ1JBQWdSO3lCQUV0UixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzs7Ozs7UUFFeEMsb0NBQVE7OztZQUFSO2dCQUFBLGlCQWdCQztnQkFmQyxJQUFJLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO29CQUNyQyxRQUFRLENBQUMsa0JBQWtCLEdBQUc7d0JBQzVCLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7NEJBQ3RDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt5QkFDcEI7NkJBQU07NEJBQ0wsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3lCQUNqQjtxQkFDRixDQUFBO2lCQUNGO3FCQUFNO29CQUNMLElBQUks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