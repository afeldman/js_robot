"use strict";

var Device = function(name, network_address, vendor){
    this.name            = name;
    this.network_address = network_address;
    this.active          = false;
    this.userid          = 0;
    this.vendor          = vendor;
    this.product_id      = '';
}

module.exports = Device;
