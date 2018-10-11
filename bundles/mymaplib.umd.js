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
            { type: i0.Component, args: [{
                        selector: 'my-map',
                        template: "\n  <div id='myMap' style='width: 100vw; height: 100vh;'></div>\n  "
                    }] }
        ];
        MymaplibComponent.propDecorators = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXltYXBsaWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teW1hcGxpYi9saWIvbXltYXBsaWIuc2VydmljZS50cyIsIm5nOi8vbXltYXBsaWIvbGliL215bWFwbGliLmNvbXBvbmVudC50cyIsIm5nOi8vbXltYXBsaWIvbGliL215bWFwbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE15bWFwbGliU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZGVjbGFyZSBjb25zdCBNaWNyb3NvZnQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktbWFwJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBpZD0nbXlNYXAnIHN0eWxlPSd3aWR0aDogMTAwdnc7IGhlaWdodDogMTAwdmg7Jz48L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNeW1hcGxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGl0bGUgPSAnbXlNYXBBcHAnO1xuICAgIGJhc2U2NEltYWdlID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmtBQUFBY0JBTUFBQUJtQ2duakFBQUFGVkJNVkVWSGNFei8vLzhhR2hwc3V5MnM0b0RSdVBNYUFEaUVsRE1HQUFBQUFYUlNUbE1BUU9iWVpnQUFBRk5KUkVGVWVGN0ZrTEVOZ0RBUUE1MkdHaUl4d0Q4YlBCc2dCbUQvYVhDczZKTU5jcFd0azF3WXg4U082Z08yTjNrV3REdUpCYzM5VXRZVFBFYzY5QklwVFZxTGdqSk9wUzd0UTFJNU55aUdpYTJySHlUN09UZzd4aEJvQUFBQUFFbEZUa1N1UW1DQyc7XG4gICAgQFZpZXdDaGlsZCgnbWFwRWxlbWVudCcpIHNvbWVJbnB1dDogRWxlbWVudFJlZjtcbiAgICBteU1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteU1hcCcpO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRNYXBWaWV3KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTWFwVmlldygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGxvYWRNYXBWaWV3KCkge1xuICAgICAgICB2YXIgbWFwID0gbmV3IE1pY3Jvc29mdC5NYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNYXAnKSwge1xuICAgICAgICAgICAgLyogTm8gbmVlZCB0byBzZXQgY3JlZGVudGlhbHMgaWYgYWxyZWFkeSBwYXNzZWQgaW4gVVJMICovXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ0FueHBTLTMya1l2QnpqUTVwYlpjbkR6MTdvS0JhMUJxMkhSd0hBTm9OcEhzM1oyNU5EdnFiaGNxSlp5RG9ZTWonLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgcHVzaHBpbiA9IG5ldyBNaWNyb3NvZnQuTWFwcy5QdXNocGluKG1hcC5nZXRDZW50ZXIoKSwgeyBpY29uOiB0aGlzLmJhc2U2NEltYWdlLCBhbmNob3I6IG5ldyBNaWNyb3NvZnQuTWFwcy5Qb2ludCgxMiwgMjgpIH0pO1xuICAgICAgICBtYXAuZW50aXRpZXMucHVzaChwdXNocGluKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNeW1hcGxpYkNvbXBvbmVudCB9IGZyb20gJy4vbXltYXBsaWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNeW1hcGxpYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNeW1hcGxpYkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTXltYXBsaWJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIlZpZXdDaGlsZCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs4QkFKRDs7Ozs7OztBQ0FBOzt5QkFhVSxVQUFVOytCQUNGLGdSQUFnUjt5QkFFdFIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Ozs7O1FBRXhDLG9DQUFROzs7WUFBUjtnQkFBQSxpQkFnQkM7Z0JBZkcsSUFBSSxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtvQkFDbkMsUUFBUSxDQUFDLGtCQUFrQixHQUFHO3dCQUMxQixJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFOzRCQUNwQyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7eUJBQ3RCOzZCQUFNOzRCQUNILEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt5QkFDbkI7cUJBQ0osQ0FBQTtpQkFDSjtxQkFBTTtvQkFDSCxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO3dCQUNwQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQ3RCO2lCQUNKO2FBR0o7Ozs7UUFFRCx1Q0FBVzs7O1lBQVg7O2dCQUNJLElBQUksR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTs7b0JBRS9ELFdBQVcsRUFBRSxrRUFBa0U7aUJBQ2xGLENBQUMsQ0FBQzs7Z0JBRUgsSUFBSSxPQUFPLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNoSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM5Qjs7b0JBeENKQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxxRUFFVDtxQkFFRjs7O2dDQUtJQyxZQUFTLFNBQUMsWUFBWTs7Z0NBZjNCOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7cUJBQzdCOzs2QkFSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==