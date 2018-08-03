"use strict";

const ROBOT_MODE = {
    T1  : 0,
    T2  : 1,
    AUTO: 2
};
module.exports = ROBOT_MODE;


const BATTERY_STATE = {
    EMPTY : 0,
    FULL  : 1,
    OK    : 2
};
module.exports = BATTERY_STATE;

const IPO_MODE = {
    BASE : 0,
    HEAD : 1
};
module.exports = IPO_MODE;

var Robot = function(name, serial, posact, axisact){
    this.asset = function(name, serial){
        this.name             = name;
        this.serial           = serial;
        this.type             = "";
        this.vendor           = "";
        this.axis_number      = 6;
        this.system_version   = "";
        this.network_address  = "";
        this.software_options = null;
    };

    this.softwareoptions = [];

    this.Condition = function(posact, axisact){
        this.runtime           = 0;
        this.runtime_mode      = ROBOT_MODE.T1;
        this.battery_state     = BATTERY_STATE.EMPTY;
        this.active            = false;
        this.drive             = false;
        this.safe              = false;
        this.move              = false;
        this.in_motion         = false;
        this.axis_actuator     = axisact;
        this.position_actuator = posact;
        this.tool_number       = 0;
        this.base_number       = 0;
        this.ipo_mode          = IPO_MODE.BASE;
        this.need_safe_ref     = false;
        this.need_safe_break_t = false;
        this.override          = 0;
    };
}
module.exports = Robot;
