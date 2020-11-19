/** @format */
export declare enum PinValue {
    "on" = "on",
    "off" = "off"
}
export declare const pins: {
    serialPins: {
        gpio_14_TX: number;
        gpio_15_RX: number;
    };
    i2cPins: {
        gpio_0_eEpromData: number;
        gpio_1_eEpromClock: number;
        gpio_2_data: number;
        gpio_3_clock: number;
    };
    hardwarePWM: {
        gpio_12_pwm: number;
        gpi0_13_pwm: number;
        gpio_18_pwm: number;
        gpio_19_pwm: number;
    };
    standardPins: {
        gpio_5: number;
        gpio_6: number;
        gpio_16: number;
        gpio_17: number;
        gpio_22: number;
        gpio_23: number;
        gpio_24: number;
        gpio_25: number;
        gpio_26: number;
        gpio_27: number;
    };
    spi: {
        spi0: {
            gpio_7_ce1: number;
            gpio_8_ceo: number;
            gpio_9_miso: number;
            gpio_10_mosi: number;
            gpio_11_sclk: number;
        };
        spi1: {
            gpio_16_ce2: number;
            gpio_17_ce1: number;
            gpio_18_ceo: number;
            gpio_19_miso: number;
            gpio_20_mosi: number;
            gpio_21_sclk: number;
        };
    };
};
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
export interface PinConfig {
    pinNumber: 0 | 1 | 2 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27;
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
