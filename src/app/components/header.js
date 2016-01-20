System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ReportHeader;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReportHeader = (function () {
                function ReportHeader() {
                    this.date = new Date();
                }
                ReportHeader = __decorate([
                    core_1.Component({
                        selector: 'report-header',
                        template: "\n        <header class=\"title\">\n            <h1>Angular Reporting <span class=\"sub-title\">Ohh yeah it can be fun!</span>\n\t\t\t</h1>\n            <time [attr.datetime]=\"(date | date:'longDate')\">{{date | date:'longDate'}}</time>\n        </header>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReportHeader);
                return ReportHeader;
            })();
            exports_1("ReportHeader", ReportHeader);
        }
    }
});
//# sourceMappingURL=header.js.map