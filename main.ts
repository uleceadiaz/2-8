basic.forever(function () {
    if (true) {
        basic.showNumber(input.compassHeading())
    } else if (input.compassHeading() < 45) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Forever)
    } else if (input.compassHeading() > 315) {
    	
    }
})
