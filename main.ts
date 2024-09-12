input.onButtonPressed(Button.A, function () {
    radio.sendString("LORT")
    basic.showLeds(`
        . # . # .
        . . # # #
        . . # . #
        . . . # .
        . . # . #
        `)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("ANTON LEGO FIGUR")
    basic.showLeds(`
        . # . # .
        . . # # #
        . . # # #
        . . . # .
        . . # . #
        `)
})
radio.onReceivedValue(function (name, value) {
    radio.sendNumber(8)
})
radio.setGroup(255)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # # .
        . # # . .
        . . . . .
        . . . . .
        `)
})
