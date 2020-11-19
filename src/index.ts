/** @format */

import {
  PinConfig,
  Type,
  EdgeType,
  GpioControl,
  PinValue,
  pins,
} from "./gpioController";

const pinConfigs: PinConfig[] = [
  {
    pinNumber: pins.standardPins.gpio_23,
    type: Type.in,
    edge: EdgeType.both,
  },
];

const gpioController = new GpioControl([]);

gpioController.set_GPIO_13(PinValue.on);
gpioController.set_GPIO_25(PinValue.off);
