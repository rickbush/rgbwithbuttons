function zero () {
    basic.showLeds(`
        . . # # .
        . # . . #
        . # . . #
        . # . . #
        . . # # .
        `)
    basic.pause(100)
    basic.clearScreen()
}
function one () {
    basic.showLeds(`
        . . . # .
        . . # # .
        . . . # .
        . . . # .
        . . # # #
        `)
    basic.pause(100)
    basic.clearScreen()
}
function three () {
    basic.showLeds(`
        . . # # .
        . # . . #
        . . . # .
        . # . . #
        . . # # .
        `)
    basic.pause(100)
    basic.clearScreen()
}
function AllOff () {
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    rCount = 0
    gCount = 0
    bCount = 0
}
function PurpleOn () {
    pins.analogWritePin(AnalogPin.P14, 127)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 127)
}
function Startup () {
    for (let index = 0; index < 3; index++) {
        RedOn()
        basic.pause(300)
        GreenOn()
        basic.pause(300)
        BlueOn()
        basic.pause(300)
        PurpleOn()
        basic.pause(500)
    }
    AllOff()
}
function BlueOn () {
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 255)
}
function four () {
    basic.showLeds(`
        . . . # .
        . # . # .
        . # . # .
        . # # # #
        . . . # .
        `)
    basic.pause(100)
    basic.clearScreen()
}
function two () {
    basic.showLeds(`
        . . # # .
        . # . . #
        . . . # .
        . . # . .
        . # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
}
function GreenOn () {
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 255)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function Green () {
    gCount += 1
    if (gCount == 1) {
        pins.analogWritePin(AnalogPin.P15, 63)
        one()
    }
    if (gCount == 2) {
        pins.analogWritePin(AnalogPin.P15, 127)
        two()
    }
    if (gCount == 3) {
        pins.analogWritePin(AnalogPin.P15, 191)
        three()
    }
    if (gCount == 4) {
        pins.analogWritePin(AnalogPin.P15, 255)
        four()
    }
    if (gCount == 5) {
        gCount = 0
        pins.analogWritePin(AnalogPin.P15, 0)
        zero()
    }
}
function RedOn () {
    pins.analogWritePin(AnalogPin.P14, 255)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function Blue () {
    bCount += 1
    if (gCount == 1) {
        pins.analogWritePin(AnalogPin.P16, 63)
        one()
    }
    if (bCount == 2) {
        pins.analogWritePin(AnalogPin.P16, 127)
        two()
    }
    if (bCount == 3) {
        pins.analogWritePin(AnalogPin.P16, 191)
        three()
    }
    if (bCount == 4) {
        pins.analogWritePin(AnalogPin.P16, 255)
        four()
    }
    if (bCount == 5) {
        bCount = 0
        pins.analogWritePin(AnalogPin.P16, 0)
        zero()
    }
}
function Red () {
    rCount += 1
    if (rCount == 1) {
        pins.analogWritePin(AnalogPin.P14, 63)
        one()
    }
    if (rCount == 2) {
        pins.analogWritePin(AnalogPin.P14, 127)
        two()
    }
    if (rCount == 3) {
        pins.analogWritePin(AnalogPin.P14, 191)
        three()
    }
    if (rCount == 4) {
        pins.analogWritePin(AnalogPin.P14, 255)
        four()
    }
    if (rCount == 5) {
        rCount = 0
        pins.analogWritePin(AnalogPin.P14, 0)
        zero()
    }
}
let bCount = 0
let gCount = 0
let rCount = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
rCount = 0
gCount = 0
bCount = 0
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
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        AllOff()
    }
    pins.analogWritePin(AnalogPin.P7, 0)
})
