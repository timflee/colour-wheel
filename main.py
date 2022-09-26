music.play_melody("C D E - F E D C ", 120)
Rainbow_Wheel = neopixel.create(DigitalPin.P15, 13, NeoPixelMode.RGB)
Rainbow_Wheel.set_brightness(40)
Rainbow_Wheel.show_color(neopixel.rgb(100, 100, 100))
Rainbow_Wheel.set_pixel_color(6, neopixel.rgb(255, 165, 0))
Rainbow_Wheel.show()
music.play_melody("C D E - F E D C ", 120)

def on_forever():
    serial.write_value("light level", input.light_level())
    if input.light_level() > 30:
        basic.show_icon(IconNames.HAPPY)
        music.play_melody("C5 B B A A B B C5 ", 500)
    else:
        basic.show_icon(IconNames.ASLEEP)
        music.play_melody("A E C - E C5 A A ", 120)
basic.forever(on_forever)
