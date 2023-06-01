basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.SmallHeart)
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
