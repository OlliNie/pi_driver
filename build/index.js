"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gpioController_1 = require("./gpioController");
var pinConfigs = [
    {
        pinNumber: gpioController_1.PinNumber.pin_28,
        type: gpioController_1.Type.in,
        edge: gpioController_1.EdgeType.both
    }
];
var gpioController = new gpioController_1.GpioControl([]);
gpioController.set_GPIO_13(gpioController_1.PinValue.on);
gpioController.set_GPIO_25(gpioController_1.PinValue.off);
