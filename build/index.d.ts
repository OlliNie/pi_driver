/** @format */
export declare enum PinValue {
    "on" = "on",
    "off" = "off"
}
export interface Pins {
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
export declare const pins: Pins;
export declare enum PinType {
    "in" = "in",
    "out" = "out",
    "high" = "high",
    "low" = "low"
}
export declare enum EdgeType {
    "none" = "none",
    "rising" = "rising",
    "falling" = "falling",
    "both" = "both"
}
declare type PinNumber = 0 | 1 | 2 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27;
export interface PinConfig {
    pinNumber: PinNumber;
    type: PinType;
    edge: EdgeType;
}
export declare class GpioControl {
    set_GPIO_2: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_3: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_17: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_27: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_22: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_10: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_9: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_11: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_0: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_5: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_6: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_13: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_19: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_26: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_14: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_15: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_28: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_23: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_24: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_25: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_8: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_7: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_1: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_12: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_16: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    set_GPIO_20: (value: PinValue, callBack?: ((status: any) => void) | undefined) => void;
    constructor(pinConfigs: PinConfig[]);
}
export {};
