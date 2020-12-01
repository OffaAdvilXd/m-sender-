basic.showString("M sender")
input.setAccelerometerRange(AcceleratorRange.EightG)
radio.setGroup(24)
basic.forever(function on_forever() {
    radio.sendNumber(input.compassHeading())
    radio.sendNumber(input.acceleration(Dimension.Z))
    radio.sendNumber(input.acceleration(Dimension.X))
    radio.sendNumber(input.acceleration(Dimension.Y))
})
