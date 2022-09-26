let Rainbow_Wheel = neopixel.create(DigitalPin.P15, 13, NeoPixelMode.RGB)
Rainbow_Wheel.setBrightness(40)
Rainbow_Wheel.showColor(neopixel.rgb(100, 100, 100))
Rainbow_Wheel.setPixelColor(6, neopixel.rgb(255, 165, 0))
Rainbow_Wheel.show()
music.playMelody("C D E - F E D C ", 120)
basic.forever(function () {
	
})
