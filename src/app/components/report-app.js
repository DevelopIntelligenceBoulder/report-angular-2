System.register(["angular2/core", "./header", "./report-form-control", "./report-form", "./report-list", "../objects/report"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, header_1, report_form_control_1, report_form_1, report_list_1, report_1;
    var ReportApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (report_form_control_1_1) {
                report_form_control_1 = report_form_control_1_1;
            },
            function (report_form_1_1) {
                report_form_1 = report_form_1_1;
            },
            function (report_list_1_1) {
                report_list_1 = report_list_1_1;
            },
            function (report_1_1) {
                report_1 = report_1_1;
            }],
        execute: function() {
            ReportApp = (function () {
                function ReportApp() {
                    this.reports = [
                        new report_1.Report('1', '1-1-2012', '500', '750', '400'),
                        new report_1.Report('2', '2-1-2012', '425', '650', '300'),
                        new report_1.Report('3', '3-1-2012', '300', '450', '300'),
                        new report_1.Report('4', '4-1-2012', '600', '750', '400')
                    ];
                    this.isFormVisible = false;
                }
                ReportApp.prototype.toggleVisibility = function (isVisible) {
                    this.isFormVisible = isVisible;
                };
                ReportApp.prototype.addReport = function (report) {
                    //Make it a string based id
                    var id = this.reports.length + 1 + '';
                    var newReport = new report_1.Report(id, report.reportDate, report.quantity, report.netSales, report.costOfGoods);
                    this.reports.push(newReport);
                };
                ReportApp = __decorate([
                    core_1.Component({
                        selector: 'report-app',
                        directives: [header_1.ReportHeader, report_form_control_1.ReportFormControl, report_form_1.ReportForm, report_list_1.ReportList],
                        template: "\n        <report-header></report-header>\n        <div class=\"grid\" id=\"content\">\n            <h2>Report Information</h2>\n            <p>There are {{reports.length}} months of retrievable data.</p>\n            <report-form-control\n                (onFormVisibilityChanged)=\"toggleVisibility($event)\"></report-form-control>\n            <report-form\n                [isVisible]=\"isFormVisible\"\n                (onFormSubmission)=\"addReport($event)\"></report-form>\n            <report-list\n                [reportList]=\"reports\"\n                [cardAmount]=\"reports.length\">\n            </report-list>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReportApp);
                return ReportApp;
            })();
            exports_1("ReportApp", ReportApp);
        }
    }
});
//# sourceMappingURL=report-app.js.map