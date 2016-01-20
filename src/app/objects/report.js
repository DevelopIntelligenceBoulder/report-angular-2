System.register([], function(exports_1) {
    var Report;
    return {
        setters:[],
        execute: function() {
            /**
             * Report Class
             */
            Report = (function () {
                function Report(id, date, quantity, netSale, costOfGoods) {
                    var PROFITABLE = 200;
                    this.id = id;
                    this.date = new Date(date);
                    this.quantity = Number(quantity);
                    this.netSale = Number(netSale);
                    this.costOfGoods = Number(costOfGoods);
                    this.grossProfit = this.netSale - this.costOfGoods;
                    this.isProfitable = this.grossProfit > PROFITABLE ? true : false;
                }
                return Report;
            })();
            exports_1("Report", Report);
        }
    }
});
//# sourceMappingURL=report.js.map