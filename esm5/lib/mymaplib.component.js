/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
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
export { MymaplibComponent };
if (false) {
    /** @type {?} */
    MymaplibComponent.prototype.ticketList;
    /** @type {?} */
    MymaplibComponent.prototype.ticketClick;
    /** @type {?} */
    MymaplibComponent.prototype.title;
    /** @type {?} */
    MymaplibComponent.prototype.base64Image;
    /** @type {?} */
    MymaplibComponent.prototype.someInput;
    /** @type {?} */
    MymaplibComponent.prototype.myMap;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXltYXBsaWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXltYXBsaWIvIiwic291cmNlcyI6WyJsaWIvbXltYXBsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7MEJBWTNGLEVBQUU7MkJBQ2MsSUFBSSxZQUFZLEVBQU87cUJBRTFELFVBQVU7MkJBQ0osZ1JBQWdSO3FCQUV0UixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzs7Ozs7SUFFeEMsb0NBQVE7OztJQUFSO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUNyQyxRQUFRLENBQUMsa0JBQWtCLEdBQUc7Z0JBQzVCLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7b0JBQ3RDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDcEI7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNqQjthQUNGLENBQUE7U0FDRjthQUFNO1lBQ0wsSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCO1NBQ0Y7S0FHRjs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUFBLGlCQWtEQzs7UUFqREMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztRQUNoQixJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7O1lBRWpFLE1BQU0sRUFBRSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUM1RCxXQUFXLEVBQUUsa0VBQWtFO1lBQy9FLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLElBQUk7WUFDZCxtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsYUFBYSxFQUFFLEtBQUs7WUFDcEIsbUJBQW1CLEVBQUUsS0FBSztZQUMxQixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLGdCQUFnQixFQUFFLEtBQUs7WUFDdkIsYUFBYSxFQUFFLEtBQUs7U0FDckIsQ0FBQyxDQUFDOztRQUNILElBQUksT0FBTyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3hELE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87O1lBQzdCLElBQUksT0FBTyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNsSyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUMzQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUUzQixTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFDLElBQUk7Z0JBRXRELE9BQU8sQ0FBQyxVQUFVLENBQUM7b0JBQ2pCLFdBQVcsRUFBRSxJQUFJO29CQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7b0JBQ25DLE9BQU8sRUFBRSxJQUFJO29CQUNiLGVBQWUsRUFBRSxJQUFJO29CQUNyQixNQUFNLEVBQUUsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUN2QyxLQUFLLEVBQUUsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVE7b0JBQ3BELFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXO2lCQUU5QyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNsQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTthQUNuQyxDQUFDLENBQUM7U0FFSixDQUFDLENBQUM7Ozs7O1FBSUQsb0JBQW9CLEtBQUs7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7S0FDRjs7Z0JBcEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLHFFQUVUO2lCQUVGOzs7NkJBRUUsS0FBSzs4QkFDTCxNQUFNOzRCQUlOLFNBQVMsU0FBQyxZQUFZOzs0QkFqQnpCOztTQVdhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IE1pY3Jvc29mdDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1tYXAnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGlkPSdteU1hcCcgc3R5bGU9J3dpZHRoOiAxMDB2dzsgaGVpZ2h0OiAxMDB2aDsnPjwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE15bWFwbGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGlja2V0TGlzdDogYW55ID0gW11cbiAgQE91dHB1dCgpIHRpY2tldENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHRpdGxlID0gJ215TWFwQXBwJztcbiAgYmFzZTY0SW1hZ2UgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCa0FBQUFjQkFNQUFBQm1DZ25qQUFBQUZWQk1WRVZIY0V6Ly8vOGFHaHBzdXkyczRvRFJ1UE1hQURpRWxETUdBQUFBQVhSU1RsTUFRT2JZWmdBQUFGTkpSRUZVZUY3RmtMRU5nREFRQTUyR0dpSXh3RDhiUEJzZ0JtRC9hWENzNkpNTmNwV3RrMXdZeDhTTzZnTzJOM2tXdER1SkJjMzlVdFlUUEVjNjlCSXBUVnFMZ2pKT3BTN3RRMUk1TnlpR2lhMnJIeVQ3T1RnN3hoQm9BQUFBQUVsRlRrU3VRbUNDJztcbiAgQFZpZXdDaGlsZCgnbWFwRWxlbWVudCcpIHNvbWVJbnB1dDogRWxlbWVudFJlZjtcbiAgbXlNYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlNYXAnKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSAnY29tcGxldGUnKSB7XG4gICAgICBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgdGhpcy5sb2FkTWFwVmlldygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB0aGlzLmxvYWRNYXBWaWV3KCk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgfVxuXG4gIGxvYWRNYXBWaWV3KCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgbWFwID0gbmV3IE1pY3Jvc29mdC5NYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNYXAnKSwge1xuICAgICAgLyogTm8gbmVlZCB0byBzZXQgY3JlZGVudGlhbHMgaWYgYWxyZWFkeSBwYXNzZWQgaW4gVVJMICovXG4gICAgICBjZW50ZXI6IG5ldyBNaWNyb3NvZnQuTWFwcy5Mb2NhdGlvbig0MC4zOTY5OTI2LCAtNzQuMTQwODAyOSksXG4gICAgICBjcmVkZW50aWFsczogJ0FueHBTLTMya1l2QnpqUTVwYlpjbkR6MTdvS0JhMUJxMkhSd0hBTm9OcEhzM1oyNU5EdnFiaGNxSlp5RG9ZTWonLFxuICAgICAgem9vbTogMTIsXG4gICAgICBsaXRlTW9kZTogdHJ1ZSxcbiAgICAgIGVuYWJsZUNsaWNrYWJsZUxvZ286IGZhbHNlLFxuICAgICAgc2hvd0xvZ286IGZhbHNlLFxuICAgICAgc2hvd1Rlcm1zTGluazogZmFsc2UsXG4gICAgICBzaG93TWFwVHlwZVNlbGVjdG9yOiBmYWxzZSxcbiAgICAgIHNob3dUcmFmZmljQnV0dG9uOiB0cnVlLFxuICAgICAgZW5hYmxlU2VhcmNoTG9nbzogZmFsc2UsXG4gICAgICBzaG93Q29weXJpZ2h0OiBmYWxzZVxuICAgIH0pO1xuICAgIHZhciBpbmZvYm94ID0gbmV3IE1pY3Jvc29mdC5NYXBzLkluZm9ib3gobWFwLmdldENlbnRlcigpLCB7XG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIGluZm9ib3guc2V0TWFwKG1hcCk7ICAgIFxuXG4gICAgdGhpcy50aWNrZXRMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICB2YXIgcHVzaHBpbiA9IG5ldyBNaWNyb3NvZnQuTWFwcy5QdXNocGluKG5ldyBNaWNyb3NvZnQuTWFwcy5Mb2NhdGlvbihlbGVtZW50LmxhdHRpdHVkZSwgZWxlbWVudC5sb25naXRpdHVkZSksIHsgaWNvbjogdGhpcy5iYXNlNjRJbWFnZSwgdGV4dDogZWxlbWVudC5zZXZlcml0eSB9KTtcbiAgICAgIHB1c2hwaW4ubWV0YWRhdGEgPSBlbGVtZW50O1xuICAgICAgbWFwLmVudGl0aWVzLnB1c2gocHVzaHBpbik7XG5cbiAgICAgIE1pY3Jvc29mdC5NYXBzLkV2ZW50cy5hZGRIYW5kbGVyKHB1c2hwaW4sICdjbGljaycsIChhcmdzKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBpbmZvYm94LnNldE9wdGlvbnMoe1xuICAgICAgICAgIHNob3dQb2ludGVyOiB0cnVlLFxuICAgICAgICAgIGxvY2F0aW9uOiBhcmdzLnRhcmdldC5nZXRMb2NhdGlvbigpLFxuICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuICAgICAgICAgIG9mZnNldDogbmV3IE1pY3Jvc29mdC5NYXBzLlBvaW50KDAsIDIwKSxcbiAgICAgICAgICB0aXRsZTogJ1RpY2tldCBObzogJyArIGFyZ3MudGFyZ2V0Lm1ldGFkYXRhLnRpY2tldE5vLCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjogYXJncy50YXJnZXQubWV0YWRhdGEuZGVzY3JpcHRpb24sIFxuICAgICAgICAgIC8vaHRtbENvbnRlbnQ6ICc8ZGl2IGNsYXNzID0gXCJpbmZ5XCIgc3R5bGU9IFwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7Ym9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5OyB3aWR0aDo1NjBweDtoZWlnaHQ6NTBweDtcIj48L2Rpdj4nXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygndGlja2V0IHBpbiBjbGlja2VkJyk7XG4gICAgICAgIHBpbkNsaWNrZWQoYXJncy50YXJnZXQubWV0YWRhdGEpXG4gICAgfSk7XG5cbiAgfSk7XG4gICAgLy92YXIgcHVzaHBpbiA9IG5ldyBNaWNyb3NvZnQuTWFwcy5QdXNocGluKG1hcC5nZXRDZW50ZXIoKSwgeyBpY29uOiB0aGlzLmJhc2U2NEltYWdlLCB0ZXh0OiAnQScsIHRpdGxlOiAnVGl0bGUnLCBzdWJUaXRsZTogJ1N1YnRpdGxlJyB9KTtcblxuICAgIC8vIHZhciBwdXNocGluID0gbmV3IE1pY3Jvc29mdC5NYXBzLlB1c2hwaW4obWFwLmdldENlbnRlcigpLCB7IGljb246IHRoaXMuYmFzZTY0SW1hZ2UsIGFuY2hvcjogbmV3IE1pY3Jvc29mdC5NYXBzLlBvaW50KDEyLCAyOCkgfSk7XG4gICAgZnVuY3Rpb24gcGluQ2xpY2tlZChwYXJtcyl7XG4gICAgICBjb25zb2xlLmxvZygnZW1pdCcsdGhhdCk7XG4gICAgICB0aGF0LnRpY2tldENsaWNrLmVtaXQocGFybXMpO1xuICAgIH1cbiAgfVxuXG4gIFxuXG59XG4iXX0=