/// <reference path="../../node_modules/angular2/bootstrap.d.ts" />
/// <reference path="../../node_modules/angular2/http.d.ts" />

import { bootstrap } from "angular2/platform/browser";
import { HTTP_PROVIDERS } from "angular2/http";
import { ReportApp } from "./components/report-app";

//Bootstrapping main Angular Component
bootstrap(ReportApp, [ HTTP_PROVIDERS ]);
