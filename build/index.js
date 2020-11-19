"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GpioControl = exports.EdgeType = exports.PinType = exports.pins = exports.PinValue = void 0;
var onoff_1 = __importDefault(require("onoff"));
var GPIO = onoff_1.default.Gpio;
var PinValue;
(function (PinValue) {
    PinValue["on"] = "on";
    PinValue["off"] = "off";
})(PinValue = exports.PinValue || (exports.PinValue = {}));
exports.pins = {
    serialPins: {
        gpio_14_TX: 14,
        gpio_15_RX: 15,
    },
    i2cPins: {
        gpio_0_eEpromData: 0,
        gpio_1_eEpromClock: 1,
        gpio_2_data: 2,
        gpio_3_clock: 3,
    },
    hardwarePWM: {
        gpio_12_pwm: 12,
        gpi0_13_pwm: 13,
        gpio_18_pwm: 18,
        gpio_19_pwm: 19,
    },
    standardPins: {
        gpio_5: 5,
        gpio_6: 6,
        gpio_16: 16,
        gpio_17: 17,
        gpio_22: 22,
        gpio_23: 23,
        gpio_24: 24,
        gpio_25: 25,
        gpio_26: 26,
        gpio_27: 27,
    },
    spi: {
        spi0: {
            gpio_7_ce1: 7,
            gpio_8_ceo: 8,
            gpio_9_miso: 9,
            gpio_10_mosi: 10,
            gpio_11_sclk: 11,
        },
        spi1: {
            gpio_16_ce2: 16,
            gpio_17_ce1: 17,
            gpio_18_ceo: 18,
            gpio_19_miso: 19,
            gpio_20_mosi: 20,
            gpio_21_sclk: 21,
        },
    },
};
var PinType;
(function (PinType) {
    PinType["in"] = "in";
    PinType["out"] = "out";
    PinType["high"] = "high";
    PinType["low"] = "low";
})(PinType = exports.PinType || (exports.PinType = {}));
var EdgeType;
(function (EdgeType) {
    EdgeType["none"] = "none";
    EdgeType["rising"] = "rising";
    EdgeType["falling"] = "falling";
    EdgeType["both"] = "both";
})(EdgeType = exports.EdgeType || (exports.EdgeType = {}));
var binaryValue = {
    off: 0,
    on: 1,
};
var defaultFunction = function (value, callBack) {
    console.log("Unable to set value to " + value + ", since the pin is not setup yet");
};
var createSetFunction = function (x) { return function (value, callBack) {
    x.setActiveLow(true); //  Inverts so that binary 1 activates a relay instead of binary 0
    x.writeSync(binaryValue[value]);
    if (typeof callBack === "function") {
        callBack(x.readSync());
    }
}; };
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
