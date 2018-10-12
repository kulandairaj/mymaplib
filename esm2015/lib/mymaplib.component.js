/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
export class MymaplibComponent {
    constructor() {
        this.ticketList = [];
        this.ticketClick = new EventEmitter();
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
        this.ticketList.forEach(element => {
            /** @type {?} */
            var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(element.lattitude, element.longititude), { icon: this.base64Image, text: element.severity });
            pushpin.metadata = element;
            map.entities.push(pushpin);
            Microsoft.Maps.Events.addHandler(pushpin, 'click', (args) => {
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
    ticketList: [{ type: Input }],
    ticketClick: [{ type: Output }],
    someInput: [{ type: ViewChild, args: ['mapElement',] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXltYXBsaWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXltYXBsaWIvIiwic291cmNlcyI6WyJsaWIvbXltYXBsaWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBV3hILE1BQU07OzBCQUN1QixFQUFFOzJCQUNjLElBQUksWUFBWSxFQUFPO3FCQUUxRCxVQUFVOzJCQUNKLGdSQUFnUjtxQkFFdFIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Ozs7O0lBRXhDLFFBQVE7UUFDTixJQUFJLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ3JDLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7b0JBQ3RDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDcEI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNqQjthQUNGLENBQUE7U0FDRjthQUFNO1lBQ0wsSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCO1NBQ0Y7S0FHRjs7OztJQUVELFdBQVc7O1FBQ1QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztRQUNoQixJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7O1lBRWpFLE1BQU0sRUFBRSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUM1RCxXQUFXLEVBQUUsa0VBQWtFO1lBQy9FLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLElBQUk7WUFDZCxtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsYUFBYSxFQUFFLEtBQUs7WUFDcEIsbUJBQW1CLEVBQUUsS0FBSztZQUMxQixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLGdCQUFnQixFQUFFLEtBQUs7WUFDdkIsYUFBYSxFQUFFLEtBQUs7U0FDckIsQ0FBQyxDQUFDOztRQUNILElBQUksT0FBTyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3hELE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTs7WUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ2xLLE9BQU8sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1lBQzNCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTNCLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBRTFELE9BQU8sQ0FBQyxVQUFVLENBQUM7b0JBQ2pCLFdBQVcsRUFBRSxJQUFJO29CQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7b0JBQ25DLE9BQU8sRUFBRSxJQUFJO29CQUNiLGVBQWUsRUFBRSxJQUFJO29CQUNyQixNQUFNLEVBQUUsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUN2QyxLQUFLLEVBQUUsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVE7b0JBQ3BELFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXO2lCQUU5QyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNsQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTthQUNuQyxDQUFDLENBQUM7U0FFSixDQUFDLENBQUM7Ozs7O1FBSUQsb0JBQW9CLEtBQUs7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7S0FDRjs7O1lBcEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFOztHQUVUO2FBRUY7Ozt5QkFFRSxLQUFLOzBCQUNMLE1BQU07d0JBSU4sU0FBUyxTQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZGVjbGFyZSBjb25zdCBNaWNyb3NvZnQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktbWFwJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBpZD0nbXlNYXAnIHN0eWxlPSd3aWR0aDogMTAwdnc7IGhlaWdodDogMTAwdmg7Jz48L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNeW1hcGxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpY2tldExpc3Q6IGFueSA9IFtdXG4gIEBPdXRwdXQoKSB0aWNrZXRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICB0aXRsZSA9ICdteU1hcEFwcCc7XG4gIGJhc2U2NEltYWdlID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmtBQUFBY0JBTUFBQUJtQ2duakFBQUFGVkJNVkVWSGNFei8vLzhhR2hwc3V5MnM0b0RSdVBNYUFEaUVsRE1HQUFBQUFYUlNUbE1BUU9iWVpnQUFBRk5KUkVGVWVGN0ZrTEVOZ0RBUUE1MkdHaUl4d0Q4YlBCc2dCbUQvYVhDczZKTU5jcFd0azF3WXg4U082Z08yTjNrV3REdUpCYzM5VXRZVFBFYzY5QklwVFZxTGdqSk9wUzd0UTFJNU55aUdpYTJySHlUN09UZzd4aEJvQUFBQUFFbEZUa1N1UW1DQyc7XG4gIEBWaWV3Q2hpbGQoJ21hcEVsZW1lbnQnKSBzb21lSW5wdXQ6IEVsZW1lbnRSZWY7XG4gIG15TWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215TWFwJyk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gJ2NvbXBsZXRlJykge1xuICAgICAgZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgIHRoaXMubG9hZE1hcFZpZXcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgdGhpcy5sb2FkTWFwVmlldygpO1xuICAgICAgfVxuICAgIH1cblxuXG4gIH1cblxuICBsb2FkTWFwVmlldygpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIG1hcCA9IG5ldyBNaWNyb3NvZnQuTWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TWFwJyksIHtcbiAgICAgIC8qIE5vIG5lZWQgdG8gc2V0IGNyZWRlbnRpYWxzIGlmIGFscmVhZHkgcGFzc2VkIGluIFVSTCAqL1xuICAgICAgY2VudGVyOiBuZXcgTWljcm9zb2Z0Lk1hcHMuTG9jYXRpb24oNDAuMzk2OTkyNiwgLTc0LjE0MDgwMjkpLFxuICAgICAgY3JlZGVudGlhbHM6ICdBbnhwUy0zMmtZdkJ6alE1cGJaY25EejE3b0tCYTFCcTJIUndIQU5vTnBIczNaMjVORHZxYmhjcUpaeURvWU1qJyxcbiAgICAgIHpvb206IDEyLFxuICAgICAgbGl0ZU1vZGU6IHRydWUsXG4gICAgICBlbmFibGVDbGlja2FibGVMb2dvOiBmYWxzZSxcbiAgICAgIHNob3dMb2dvOiBmYWxzZSxcbiAgICAgIHNob3dUZXJtc0xpbms6IGZhbHNlLFxuICAgICAgc2hvd01hcFR5cGVTZWxlY3RvcjogZmFsc2UsXG4gICAgICBzaG93VHJhZmZpY0J1dHRvbjogdHJ1ZSxcbiAgICAgIGVuYWJsZVNlYXJjaExvZ286IGZhbHNlLFxuICAgICAgc2hvd0NvcHlyaWdodDogZmFsc2VcbiAgICB9KTtcbiAgICB2YXIgaW5mb2JveCA9IG5ldyBNaWNyb3NvZnQuTWFwcy5JbmZvYm94KG1hcC5nZXRDZW50ZXIoKSwge1xuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9KTtcbiAgICBpbmZvYm94LnNldE1hcChtYXApOyAgICBcblxuICAgIHRoaXMudGlja2V0TGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgdmFyIHB1c2hwaW4gPSBuZXcgTWljcm9zb2Z0Lk1hcHMuUHVzaHBpbihuZXcgTWljcm9zb2Z0Lk1hcHMuTG9jYXRpb24oZWxlbWVudC5sYXR0aXR1ZGUsIGVsZW1lbnQubG9uZ2l0aXR1ZGUpLCB7IGljb246IHRoaXMuYmFzZTY0SW1hZ2UsIHRleHQ6IGVsZW1lbnQuc2V2ZXJpdHkgfSk7XG4gICAgICBwdXNocGluLm1ldGFkYXRhID0gZWxlbWVudDtcbiAgICAgIG1hcC5lbnRpdGllcy5wdXNoKHB1c2hwaW4pO1xuXG4gICAgICBNaWNyb3NvZnQuTWFwcy5FdmVudHMuYWRkSGFuZGxlcihwdXNocGluLCAnY2xpY2snLCAoYXJncykgPT4ge1xuICAgICAgICBcbiAgICAgICAgaW5mb2JveC5zZXRPcHRpb25zKHtcbiAgICAgICAgICBzaG93UG9pbnRlcjogdHJ1ZSxcbiAgICAgICAgICBsb2NhdGlvbjogYXJncy50YXJnZXQuZ2V0TG9jYXRpb24oKSxcbiAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICBvZmZzZXQ6IG5ldyBNaWNyb3NvZnQuTWFwcy5Qb2ludCgwLCAyMCksXG4gICAgICAgICAgdGl0bGU6ICdUaWNrZXQgTm86ICcgKyBhcmdzLnRhcmdldC5tZXRhZGF0YS50aWNrZXRObywgXG4gICAgICAgICAgZGVzY3JpcHRpb246IGFyZ3MudGFyZ2V0Lm1ldGFkYXRhLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAvL2h0bWxDb250ZW50OiAnPGRpdiBjbGFzcyA9IFwiaW5meVwiIHN0eWxlPSBcImJhY2tncm91bmQtY29sb3I6IHdoaXRlO2JvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTsgd2lkdGg6NTYwcHg7aGVpZ2h0OjUwcHg7XCI+PC9kaXY+J1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3RpY2tldCBwaW4gY2xpY2tlZCcpO1xuICAgICAgICBwaW5DbGlja2VkKGFyZ3MudGFyZ2V0Lm1ldGFkYXRhKVxuICAgIH0pO1xuXG4gIH0pO1xuICAgIC8vdmFyIHB1c2hwaW4gPSBuZXcgTWljcm9zb2Z0Lk1hcHMuUHVzaHBpbihtYXAuZ2V0Q2VudGVyKCksIHsgaWNvbjogdGhpcy5iYXNlNjRJbWFnZSwgdGV4dDogJ0EnLCB0aXRsZTogJ1RpdGxlJywgc3ViVGl0bGU6ICdTdWJ0aXRsZScgfSk7XG5cbiAgICAvLyB2YXIgcHVzaHBpbiA9IG5ldyBNaWNyb3NvZnQuTWFwcy5QdXNocGluKG1hcC5nZXRDZW50ZXIoKSwgeyBpY29uOiB0aGlzLmJhc2U2NEltYWdlLCBhbmNob3I6IG5ldyBNaWNyb3NvZnQuTWFwcy5Qb2ludCgxMiwgMjgpIH0pO1xuICAgIGZ1bmN0aW9uIHBpbkNsaWNrZWQocGFybXMpe1xuICAgICAgY29uc29sZS5sb2coJ2VtaXQnLHRoYXQpO1xuICAgICAgdGhhdC50aWNrZXRDbGljay5lbWl0KHBhcm1zKTtcbiAgICB9XG4gIH1cblxuICBcblxufVxuIl19