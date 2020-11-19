"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var gpioController_1 = require("./gpioController");
var pinConfigs = [
    {
        pinNumber: gpioController_1.pins.standardPins.gpio_23,
        type: gpioController_1.Type.in,
        edge: gpioController_1.EdgeType.both,
    },
];
var gpioController = new gpioController_1.GpioControl(pinConfigs);
gpioController.set_GPIO_23(gpioController_1.PinValue.on);
gpioController.set_GPIO_25(gpioController_1.PinValue.off);
