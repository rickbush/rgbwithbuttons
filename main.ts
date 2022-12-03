function AllOff () {
    pins.analogWritePin(AnalogPin.P7, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
    pins.analogWritePin(AnalogPin.P9, 0)
}
function Purple () {
    pins.analogWritePin(AnalogPin.P7, 255)
    pins.analogWritePin(AnalogPin.P7, 0)
    pins.analogWritePin(AnalogPin.P9, 255)
}
function Startup () {
    for (let index = 0; index < 3; index++) {
        Red()
        basic.pause(200)
        Green()
        basic.pause(200)
        Blue()
        basic.pause(200)
        Purple()
        basic.pause(200)
    }
    AllOff()
}
function Green () {
    pins.analogWritePin(AnalogPin.P7, 0)
    pins.analogWritePin(AnalogPin.P8, 255)
    pins.analogWritePin(AnalogPin.P9, 0)
}
function Blue () {
    pins.analogWritePin(AnalogPin.P7, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
    pins.analogWritePin(AnalogPin.P9, 255)
}
function Red () {
    pins.analogWritePin(AnalogPin.P7, 255)
    pins.analogWritePin(AnalogPin.P8, 0)
    pins.analogWritePin(AnalogPin.P9, 0)
}
led.enable(false)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P4, PinPullMode.PullUp)
Startup()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        Red()
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        Green()
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        Blue()
    }
    if (pins.digitalReadPin(DigitalPin.P4) == 0) {
        AllOff()
    }
})
