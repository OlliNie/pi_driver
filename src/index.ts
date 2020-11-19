/** @format */

import onoff, { Direction, Edge, Gpio, BinaryValue } from "onoff";

const GPIO = onoff.Gpio;

export enum PinValue {
  "on" = "on",
  "off" = "off",
}

interface Pins {
  serialPins: {
    gpio_14_TX: PinNumber;
    gpio_15_RX: PinNumber;
  };
  i2cPins: {
    gpio_0_eEpromData: PinNumber;
    gpio_1_eEpromClock: PinNumber;
    gpio_2_data: PinNumber;
    gpio_3_clock: PinNumber;
  };
  hardwarePWM: {
    gpio_12_pwm: PinNumber;
    gpi0_13_pwm: PinNumber;
    gpio_18_pwm: PinNumber;
    gpio_19_pwm: PinNumber;
  };
  standardPins: {
    gpio_5: PinNumber;
    gpio_6: PinNumber;
    gpio_16: PinNumber;
    gpio_17: PinNumber;
    gpio_22: PinNumber;
    gpio_23: PinNumber;
    gpio_24: PinNumber;
    gpio_25: PinNumber;
    gpio_26: PinNumber;
    gpio_27: PinNumber;
  };
  spi: {
    spi0: {
      gpio_7_ce1: PinNumber;
      gpio_8_ceo: PinNumber;
      gpio_9_miso: PinNumber;
      gpio_10_mosi: PinNumber;
      gpio_11_sclk: PinNumber;
    };
    spi1: {
      gpio_16_ce2: PinNumber;
      gpio_17_ce1: PinNumber;
      gpio_18_ceo: PinNumber;
      gpio_19_miso: PinNumber;
      gpio_20_mosi: PinNumber;
      gpio_21_sclk: PinNumber;
    };
  };
}

export const pins: Pins = {
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

export enum PinType {
  "in" = "in",
  "out" = "out",
  "high" = "high",
  "low" = "low",
}

export enum EdgeType {
  "none" = "none",
  "rising" = "rising",
  "falling" = "falling",
  "both" = "both",
}

type PinNumber =
  | 0
  | 1
  | 2
  | 3
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27;

export interface PinConfig {
  pinNumber: PinNumber;
  type: PinType;
  edge: EdgeType;
}

const binaryValue = {
  off: 0 as BinaryValue,
  on: 1 as BinaryValue,
};

const defaultFunction = (value: PinValue, callBack?: (status: any) => void) => {
  console.log(
    `Unable to set value to ${value}, since the pin is not setup yet`
  );
};

const createSetFunction = (x: Gpio) => (value: PinValue, callBack: any) => {
  x.setActiveLow(true); //  Inverts so that binary 1 activates a relay instead of binary 0
  x.writeSync(binaryValue[value]);
  if (typeof callBack === "function") {
    callBack(x.readSync());
  }
};

export class GpioControl {
  set_GPIO_2 = defaultFunction;
  set_GPIO_3 = defaultFunction;
  set_GPIO_17 = defaultFunction;
  set_GPIO_27 = defaultFunction;
  set_GPIO_22 = defaultFunction;
  set_GPIO_10 = defaultFunction;
  set_GPIO_9 = defaultFunction;
  set_GPIO_11 = defaultFunction;
  set_GPIO_0 = defaultFunction;
  set_GPIO_5 = defaultFunction;
  set_GPIO_6 = defaultFunction;
  set_GPIO_13 = defaultFunction;
  set_GPIO_19 = defaultFunction;
  set_GPIO_26 = defaultFunction;
  set_GPIO_14 = defaultFunction;
  set_GPIO_15 = defaultFunction;
  set_GPIO_28 = defaultFunction;
  set_GPIO_23 = defaultFunction;
  set_GPIO_24 = defaultFunction;
  set_GPIO_25 = defaultFunction;
  set_GPIO_8 = defaultFunction;
  set_GPIO_7 = defaultFunction;
  set_GPIO_1 = defaultFunction;
  set_GPIO_12 = defaultFunction;
  set_GPIO_16 = defaultFunction;
  set_GPIO_20 = defaultFunction;

  constructor(pinConfigs: PinConfig[]) {
    pinConfigs.map((config) => {
      const index = (`set_GPIO_${config.pinNumber}` as any) as keyof GpioControl;
      this[index] = createSetFunction(
        new GPIO(config.pinNumber, config.type, config.edge)
      );
    });
  }
}
