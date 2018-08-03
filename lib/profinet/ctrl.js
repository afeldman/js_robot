"use strict";

var Controller = function(name){
    this.name           = name;
    this.useDeviceStack = false;
    this.number_save_io = 0;
    this.number_io      = 0;
    this.version        = '';
    this.energyEnable   = false;
    this.devices        = [];
}

module.exports = Controller;
