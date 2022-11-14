radio.onReceivedNumber(function (receivedNumber) {
    magicnumber = receivedNumber
})
input.onGesture(Gesture.ThreeG, function () {
    if (magicnumber == 1) {
        basic.showIcon(IconNames.Yes)
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.No)
        while (magicnumber == 0) {
            music.setVolume(255)
            music.playMelody("A C5 A C5 A C5 A C5 ", 300)
        }
    }
})
let magicnumber = 0
radio.setGroup(34)
