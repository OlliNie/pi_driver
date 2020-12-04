<!-- @format -->

# PURPOSE

### NOTE: This package is still very early into development but I have tested that it does work on raspberry pi4.

To generate an easy to use type-script supported GPIO controller for raspberry pi boards equipped with a 40 pin GPIO header. This package is build upon the onoff package https://www.npmjs.com/package/onoff and is not reliant on any other packages. Currently this package only exposes basic functionality of the onoff package and can turn a GPIO pin off an on in a more intuitive way. Future plans include to expand on this.

# GPIO PINS

The raspberry pi is loaded with a 40 pin GPIO header and it is not apparent out of the box as to what pins do what. Some GPIO pins have special additional abilities for example GPIO pins 14 and 15 can be used for serial communication. For this reason it is recommended to use the "standard" GPIO pins (these are the pins that dont have additional functionaliy described in parenthesies) unless you know what you are doing.

- GPIO 2 (SDA)
- GPIO 3 (SCL)
- GPIO 17
- GPIO 27
- GPIO 22
- GPIO 10 (MOSI)
- GPIO 9 (MISO)
- GPIO 11 (SCLK)
- GPIO 0 (ID_SD)
- GPIO 5
- GPIO 6
- GPIO 13 (PWM1)
- GPIO 19 (PCM FS)
- GPIO 26
- GPIO 14 (TXD)
- GPIO 15 (RXD)
- GPIO 18 (PCM_CLK)
- GPIO 23
- GPIO 24
- GPIO 25
- GPIO 8 (CEO)
- GPIO 7 (CE1)
- GPIO 1 (ID_SC)
- GPIO 12 (PWM_0)
- GPIO 16
- GPIO 20 (PCM_DIN)

# Installation

`yarn add best_gpio_controller`
`npm install best_gpio_controller`

# Example

```
import {
EdgeType,
GpioControl,
PinConfig,
PinType,
PinValue,
pins,
} from "best_gpio_controller";

const pinConfigurations: PinConfig[] = [
{
pinNumber: pins.standardPins.gpio_23,
type: PinType.low,
edge: EdgeType.both,
},
{
pinNumber: pins.standardPins.gpio_16,
type: PinType.low,
edge: EdgeType.both,
},
];

const gpioController = new GpioControl(pinConfigurations);

gpioController.set_GPIO_23(PinValue.off);
```
