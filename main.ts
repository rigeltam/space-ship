input.onButtonPressed(Button.A, function () {
    ship.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    shoot = game.createSprite(ship.get(LedSpriteProperty.X), ship.get(LedSpriteProperty.Y))
    shoot.change(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (shoot.isTouching(boss)) {
            game.addScore(1)
            shoot.delete()
            boss.delete()
            music.ringTone(587)
            music.ringTone(523)
            music.ringTone(587)
        }
    }
    if (0 <= 0) {
        shoot.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    ship.move(1)
})
let boss: game.LedSprite = null
let shoot: game.LedSprite = null
let ship: game.LedSprite = null
ship = game.createSprite(2, 4)
game.setLife(5)
game.startCountdown(36000)
basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        basic.pause(100)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(220, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(311, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 4; index++) {
            music.playTone(349, music.beat(BeatFraction.Whole))
            basic.pause(100)
        }
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(220, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 4; index++) {
            music.playTone(349, music.beat(BeatFraction.Whole))
            basic.pause(100)
        }
        music.playTone(392, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 3; index++) {
            music.playTone(440, music.beat(BeatFraction.Whole))
            basic.pause(100)
        }
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Half))
        basic.pause(100)
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        basic.pause(100)
        music.playTone(294, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 3; index++) {
            music.playTone(587, music.beat(BeatFraction.Whole))
            basic.pause(100)
        }
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 3; index++) {
            music.playTone(466, music.beat(BeatFraction.Whole))
            basic.pause(100)
        }
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
    basic.pause(5000)
})
basic.forever(function () {
    boss = game.createSprite(randint(0, 5), 0)
    boss.change(LedSpriteProperty.Brightness, 150)
    basic.pause(100)
    boss.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        boss.move(1)
        basic.pause(500)
    }
    if (boss.isTouching(ship)) {
        game.removeLife(1)
        music.ringTone(262)
        music.ringTone(330)
        music.ringTone(392)
        music.ringTone(523)
    }
    if (boss.isTouchingEdge()) {
        boss.delete()
    }
})
