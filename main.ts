let valor = 0
/**
 * Maior valor obtido: 718
 * 
 * - Brisa leve: 10 ~ 150
 * 
 * - Brisa moderada: 151 ~ 300
 * 
 * - Vento forte: 301 ~450
 * 
 * - Ventania forte: 451 ~ 650
 * 
 * - Tempestade: 651 ~ 800
 */
basic.forever(function () {
    basic.clearScreen()
    valor = pins.analogReadPin(AnalogPin.P1)
    if (valor >= 20 && valor <= 150) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
    } else if (valor >= 151 && valor <= 300) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            `)
    } else if (valor >= 301 && valor <= 450) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (valor >= 451 && valor <= 650) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (valor >= 651) {
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
