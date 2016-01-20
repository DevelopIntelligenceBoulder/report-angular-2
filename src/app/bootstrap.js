System.register(["angular2/platform/browser", "./components/report-app"], function(exports_1) {
    var browser_1, report_app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (report_app_1_1) {
                report_app_1 = report_app_1_1;
            }],
        execute: function() {
            //Bootstrapping main Angular Component
            browser_1.bootstrap(report_app_1.ReportApp);
        }
    }
});
//# sourceMappingURL=bootstrap.js.map