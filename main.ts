input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    text_list += 1
    basic.showString("" + (namen[x]))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    text_list += -1
    basic.showString("" + (namen[x]))
})
let text_list = 0
let x = 0
let namen: string[] = []
namen = ["A", "B", "C"]
x = 0
