import onoff, { Direction, Edge, Gpio } from 'onoff'

const GPIO = onoff.Gpio

export enum PinValue{
    "on"="on",
    "off"="off"

}

export enum PinNumber{
 "pin_2"=2,
 "pin_3"=3,
 "pin_17"=17,
 "pin_27"=27,
 "pin_22"=22,
 "pin_10"=10,
 "pin_9"=9,
 "pin_11"=11,
 "pin_0"=0,
 "pin_5"=5,
 "pin_6"=6,
 "pin_13"=13,
 "pin_19"=19,
 "pin_26"=26,
 "pin_14"=14,
 "pin_15"=15,
 "pin_28"=28,
 "pin_23"=23,
 "pin_24"=24,
 "pin_25"=25,
 "pin_8"=8,
 "pin_7"=7,
 "pin_1"=1,
 "pin_12"=12,
 "pin_16"=16,
 "pin_20"=20
};

export enum Type {
    "in" = "in",
    "out" = "out",
    "high" = "high",
    "low" = "low"
}

export enum EdgeType {
"none"="none",
"rising"="rising",
"falling"="falling",
"both"="both"
}


export interface PinConfig{
    pinNumber:PinNumber,
    type:Direction,
    edge:Edge
}

const defaultFunction = (value:any)=>{console.log(`Unable to set value to ${value}, since the pin is not setup yet`)}

const createSetFunction = (x:Gpio)=>(value:any)=>{x.writeSync(value)}

export  class GpioControl {
   set_GPIO_2 = defaultFunction
    set_GPIO_3 = defaultFunction
    set_GPIO_17 = defaultFunction
    set_GPIO_27 = defaultFunction
    set_GPIO_22 = defaultFunction
    set_GPIO_10 = defaultFunction
    set_GPIO_9 = defaultFunction
    set_GPIO_11 = defaultFunction
    set_GPIO_0 = defaultFunction
    set_GPIO_5 = defaultFunction 
    set_GPIO_6 = defaultFunction
    set_GPIO_13 = defaultFunction
    set_GPIO_19 = defaultFunction 
    set_GPIO_26 = defaultFunction
    set_GPIO_14 = defaultFunction 
    set_GPIO_15 = defaultFunction 
    set_GPIO_28 = defaultFunction 
    set_GPIO_23 = defaultFunction
    set_GPIO_24 = defaultFunction
    set_GPIO_25 = defaultFunction
    set_GPIO_8  = defaultFunction
    set_GPIO_7  = defaultFunction
    set_GPIO_1  = defaultFunction
    set_GPIO_12  = defaultFunction 
    set_GPIO_16  = defaultFunction 
    set_GPIO_20  = defaultFunction

    constructor(pinConfigs:PinConfig[]){
        pinConfigs.map(config=>{
            const index = `set_GPIO_${config.pinNumber}` as any as keyof GpioControl
            this[index]=createSetFunction(new GPIO(config.pinNumber,config.type,config.edge))
 
        })
    }

}   
