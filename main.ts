music.playMelody("C D E - F E D C ", 120)
let Rainbow_Wheel = neopixel.create(DigitalPin.P15, 13, NeoPixelMode.RGB)
Rainbow_Wheel.setBrightness(40)
Rainbow_Wheel.showColor(neopixel.rgb(100, 100, 100))
Rainbow_Wheel.setPixelColor(6, neopixel.rgb(255, 165, 0))
Rainbow_Wheel.show()
music.playMelody("C D E - F E D C ", 120)
basic.forever(function () {
    serial.writeValue("light level", input.lightLevel())
    if (input.lightLevel() > 30) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("C5 B B A A B B C5 ", 500)
    } else {
        basic.showIcon(IconNames.Asleep)
        music.playMelody("A E C - E C5 A A ", 120)
    }
})
