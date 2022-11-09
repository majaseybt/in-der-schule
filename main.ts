input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    input2 = "" + input2 + "A"
    basic.showString("A")
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (code == input2) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    input2 = "" + input2 + "B"
    basic.showString("B")
})
let input2 = ""
let code = ""
code = "AABBBA"
input2 = ""
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
