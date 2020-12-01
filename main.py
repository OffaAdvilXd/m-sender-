basic.show_string("M sender")
input.set_accelerometer_range(AcceleratorRange.EIGHT_G)
radio.set_group(24)

def on_forever():
    radio.send_number(input.compass_heading())
    radio.send_number(input.acceleration(Dimension.Z))
    radio.send_number(input.acceleration(Dimension.X))
    radio.send_number(input.acceleration(Dimension.Y))
basic.forever(on_forever)
