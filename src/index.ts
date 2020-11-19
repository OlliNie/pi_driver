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
    type: Type.low,
    edge: EdgeType.both,
  },
];

const gpioController = new GpioControl(pinConfigs);

gpioController.set_GPIO_23(PinValue.on);
gpioController.set_GPIO_25(PinValue.off);
