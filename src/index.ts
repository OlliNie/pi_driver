import { PinConfig, PinNumber, Type, EdgeType, GpioControl, PinValue } from './gpioController'



const pinConfigs:PinConfig[]=[
    {
        pinNumber:PinNumber.pin_28,
        type: Type.in,
        edge: EdgeType.both

}]

const gpioController = new GpioControl([])

gpioController.set_GPIO_13(PinValue.on)
gpioController.set_GPIO_25(PinValue.off)

