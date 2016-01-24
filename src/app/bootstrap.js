/// <reference path="../../node_modules/angular2/bootstrap.d.ts" />
/// <reference path="../../node_modules/angular2/http.d.ts" />
System.register(["angular2/platform/browser", "angular2/http", "./components/report-app"], function(exports_1) {
    var browser_1, http_1, report_app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (report_app_1_1) {
                report_app_1 = report_app_1_1;
            }],
        execute: function() {
            //Bootstrapping main Angular Component
            browser_1.bootstrap(report_app_1.ReportApp, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=bootstrap.js.map