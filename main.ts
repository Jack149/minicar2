k_Bit.carStop()
basic.pause(100)
k_Bit.LED_brightness(0)
k_Bit.Led(COLOR.blue)
basic.pause(1000)
k_Bit.Led(COLOR.red)
basic.pause(1000)
k_Bit.Led(COLOR.red)
basic.pause(1000)
k_Bit.OFFLed()
basic.pause(200)
let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
strip.clear()
basic.pause(200)
basic.forever(function () {
    for (let index = 0; index <= 17; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 17; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 17; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 17; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 17; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 17; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 17; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 17; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 17; index++) {
        strip.clear()
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
    }
})
