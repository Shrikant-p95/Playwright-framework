class testdata {
    constructor() {
        this.userName = 'spatil+2@allplan.com';
        this.Password = '12345678';
    }
}

class orderdata {
    constructor() {
        this.orderName = 'uniqueOrderName_' + Date.now();
    }
}

export default {
    testdata: new testdata(),
    orderdata: new orderdata()
};