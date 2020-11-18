"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GpioControl = exports.EdgeType = exports.Type = exports.PinNumber = exports.PinValue = void 0;
var onoff_1 = __importDefault(require("onoff"));
var GPIO = onoff_1.default.Gpio;
var PinValue;
(function (PinValue) {
    PinValue["on"] = "on";
    PinValue["off"] = "off";
})(PinValue = exports.PinValue || (exports.PinValue = {}));
var PinNumber;
(function (PinNumber) {
    PinNumber[PinNumber["pin_2"] = 2] = "pin_2";
    PinNumber[PinNumber["pin_3"] = 3] = "pin_3";
    PinNumber[PinNumber["pin_17"] = 17] = "pin_17";
    PinNumber[PinNumber["pin_27"] = 27] = "pin_27";
    PinNumber[PinNumber["pin_22"] = 22] = "pin_22";
    PinNumber[PinNumber["pin_10"] = 10] = "pin_10";
    PinNumber[PinNumber["pin_9"] = 9] = "pin_9";
    PinNumber[PinNumber["pin_11"] = 11] = "pin_11";
    PinNumber[PinNumber["pin_0"] = 0] = "pin_0";
    PinNumber[PinNumber["pin_5"] = 5] = "pin_5";
    PinNumber[PinNumber["pin_6"] = 6] = "pin_6";
    PinNumber[PinNumber["pin_13"] = 13] = "pin_13";
    PinNumber[PinNumber["pin_19"] = 19] = "pin_19";
    PinNumber[PinNumber["pin_26"] = 26] = "pin_26";
    PinNumber[PinNumber["pin_14"] = 14] = "pin_14";
    PinNumber[PinNumber["pin_15"] = 15] = "pin_15";
    PinNumber[PinNumber["pin_28"] = 28] = "pin_28";
    PinNumber[PinNumber["pin_23"] = 23] = "pin_23";
    PinNumber[PinNumber["pin_24"] = 24] = "pin_24";
    PinNumber[PinNumber["pin_25"] = 25] = "pin_25";
    PinNumber[PinNumber["pin_8"] = 8] = "pin_8";
    PinNumber[PinNumber["pin_7"] = 7] = "pin_7";
    PinNumber[PinNumber["pin_1"] = 1] = "pin_1";
    PinNumber[PinNumber["pin_12"] = 12] = "pin_12";
    PinNumber[PinNumber["pin_16"] = 16] = "pin_16";
    PinNumber[PinNumber["pin_20"] = 20] = "pin_20";
})(PinNumber = exports.PinNumber || (exports.PinNumber = {}));
;
var Type;
(function (Type) {
    Type["in"] = "in";
    Type["out"] = "out";
    Type["high"] = "high";
    Type["low"] = "low";
})(Type = exports.Type || (exports.Type = {}));
var EdgeType;
(function (EdgeType) {
    EdgeType["none"] = "none";
    EdgeType["rising"] = "rising";
    EdgeType["falling"] = "falling";
    EdgeType["both"] = "both";
})(EdgeType = exports.EdgeType || (exports.EdgeType = {}));
var defaultFunction = function (value) { console.log("Unable to set value to " + value + ", since the pin is not setup yet"); };
var createSetFunction = function (x) { return function (value) { x.writeSync(value); }; };
var GpioControl = /** @class */ (function () {
    function GpioControl(pinConfigs) {
        var _this = this;
        this.set_GPIO_2 = defaultFunction;
        this.set_GPIO_3 = defaultFunction;
        this.set_GPIO_17 = defaultFunction;
        this.set_GPIO_27 = defaultFunction;
        this.set_GPIO_22 = defaultFunction;
        this.set_GPIO_10 = defaultFunction;
        this.set_GPIO_9 = defaultFunction;
        this.set_GPIO_11 = defaultFunction;
        this.set_GPIO_0 = defaultFunction;
        this.set_GPIO_5 = defaultFunction;
        this.set_GPIO_6 = defaultFunction;
        this.set_GPIO_13 = defaultFunction;
        this.set_GPIO_19 = defaultFunction;
        this.set_GPIO_26 = defaultFunction;
        this.set_GPIO_14 = defaultFunction;
        this.set_GPIO_15 = defaultFunction;
        this.set_GPIO_28 = defaultFunction;
        this.set_GPIO_23 = defaultFunction;
        this.set_GPIO_24 = defaultFunction;
        this.set_GPIO_25 = defaultFunction;
        this.set_GPIO_8 = defaultFunction;
        this.set_GPIO_7 = defaultFunction;
        this.set_GPIO_1 = defaultFunction;
        this.set_GPIO_12 = defaultFunction;
        this.set_GPIO_16 = defaultFunction;
        this.set_GPIO_20 = defaultFunction;
        pinConfigs.map(function (config) {
            var index = "set_GPIO_" + config.pinNumber;
            _this[index] = createSetFunction(new GPIO(config.pinNumber, config.type, config.edge));
        });
    }
    return GpioControl;
}());
exports.GpioControl = GpioControl;
