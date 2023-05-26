radio.onReceivedNumber(function (receivedNumber) {
    led.setBrightness(led.brightness() + receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "power") {
        encendido = !(encendido)
        led.setBrightness(125)
        led.enable(encendido)
    }
})
let encendido = false
radio.setGroup(7)
encendido = false
led.enable(encendido)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
	
})
